import { Show } from "solid-js";
import { Button } from "@kobalte/core/button";

export const ThemeSelector = () => {
	return (
		<Button
			aria-label="Toggle Theme"
			onClick={() => console.log("Toggle theme")}
			class="color-[--inactive] hover:color-[--hover-inactive]"
		>
			<Show
				when={false}
				fallback={<div class="i-tabler-moon-stars h-1.2em w-1.2em icon" />}
			>
				<div class="i-tabler-sun-filled h-1.2em w-1.2em icon" />
			</Show>
		</Button>
	);
};
