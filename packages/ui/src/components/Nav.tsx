import { A, useLocation } from "@solidjs/router";
import { For } from "solid-js";

export const Nav = () => {
	const location = useLocation();

	const links = [
		{
			href: "/about",
			text: "About",
		},
		{
			href: "/blog",
			text: "Blog",
		},
		{
			href: "/resume",
			text: "Resume",
		},
		{
			href: "/oss",
			text: "Open Source",
		},
		{
			href: "/contact",
			text: "Contact",
		},
	];

	return (
		<nav class="rounded-t-lg border-b-4 border-solid border-black bg-white">
			<ul class="container flex items-center">
				<li class="flex p-4">
					<div class="w-5 h-5 bg-black rounded-full" />
				</li>
				<For each={links}>
					{({ href, text }) => (
						<li class="flex">
							<A
								href={href}
								class="ui-button-default"
								activeClass="underline decoration-4"
							>
								{text}
							</A>
						</li>
					)}
				</For>
			</ul>
		</nav>
	);
};
