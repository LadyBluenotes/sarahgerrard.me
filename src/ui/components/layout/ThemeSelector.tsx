import { Show } from "solid-js";
import { Button } from "@kobalte/core/button";

export const ThemeSelector = () => {
	return (
		<Button
			aria-label="Toggle Theme"
			onClick={() => console.log("Toggle theme")}
		>
			<Show
				when={false}
				fallback={<div class="i-tabler-moon-stars h-1.2em w-1.2em" />}
			>
				<div class="i-tabler-sun-filled h-1.4em w-1.4em" />
			</Show>
		</Button>
	);
};
