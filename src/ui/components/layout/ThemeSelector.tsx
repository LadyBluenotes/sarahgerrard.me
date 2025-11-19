import { createEffect, createSignal, on, onMount, Show } from "solid-js";
import { Button } from "@kobalte/core/button";

export const ThemeSelector = () => {
	const [darkMode, setDarkMode] = createSignal<boolean>(false);

	onMount(() => {
		const theme = window.localStorage.getItem("theme");
		if (theme === "dark") {
			setDarkMode(true);
			document.documentElement.classList.add("dark");
		}
	})

	createEffect(
		on(darkMode, (isDark) => {
		if(isDark) {
			document.documentElement.setAttribute("data-theme", "dark");
		} else {
			document.documentElement.removeAttribute("data-theme");
		}
			window.localStorage.setItem("theme", isDark ? "dark" : "light");
		})
	);

	// noinspection TypeScriptValidateTypes
	return (
		<Button
			aria-label="Toggle Theme"
			onClick={() => setDarkMode(prev => !prev)}
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
