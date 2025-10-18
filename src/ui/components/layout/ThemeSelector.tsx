import { createEffect, createSignal, on, onMount, Show } from "solid-js";
import { Button } from "@kobalte/core/button";

export const ThemeSelector = () => {
	const [darkMode, setDarkMode] = createSignal<boolean>(false);

	createEffect(
		on(darkMode, () => {
			if (!darkMode()) {
				document.documentElement.setAttribute("data-theme", "dark");
				window.localStorage.setItem("theme", "dark");
			} else {
				document.documentElement.setAttribute("data-theme", "light");
				window.localStorage.setItem("theme", "light");
			}
		})
	);

	return (
		<Button
			aria-label="Toggle Theme"
			onClick={() => setDarkMode(!darkMode())}
			class="color-[--inactive] hover:color-[--hover-inactive]"
		>
			<Show
				when={darkMode()}
				fallback={<div class="i-tabler-moon-stars h-1.2em w-1.2em icon" />}
			>
				<div class="i-tabler-sun-filled h-1.2em w-1.2em icon" />
			</Show>
		</Button>
	);
};
