import { Show } from "solid-js";
import { Button } from "@kobalte/core/button";
import { setTheme, getTheme } from "@kobalte/solidbase/client";

export const ThemeSelector = () => {
	return (
		<Button
			aria-label="Toggle Theme"
			onClick={() =>
				getTheme() === "light" ? setTheme("dark") : setTheme("light")
			}
		>
			<Show
				when={getTheme() === "light"}
				fallback={<div class="i-tabler-moon-stars h-1.4em w-1.4em" />}
			>
				<div class="i-tabler-sun-filled h-1.4em w-1.4em" />
			</Show>
		</Button>
	);
};
