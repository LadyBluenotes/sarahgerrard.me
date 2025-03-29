import { Component } from "solid-js";

export const Footer: Component = () => {
	return (
		<footer class="border-t-4 border-solid border-black h-50px px-4 flex items-center justify-center bg-white rounded-b-xl">
			<p class="font-bold">
				Made by me. Built with{" "}
				<a
					target="_blank"
					href="https://docs.solidjs .com/solid-start"
					class="ui-link"
				>
					SolidStart
				</a>
				,
				<a
					target="_blank"
					href="https://kobalte.dev"
					class="ui-link pl-1"
				>
					Kobalte
				</a>
				, and
				<a
					target="_blank"
					href="https://unocss.dev"
					class="ui-link pl-1"
				>
					UnoCSS
				</a>
				.
			</p>
		</footer>
	);
};
