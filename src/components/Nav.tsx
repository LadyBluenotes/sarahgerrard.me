import { A, useLocation } from "@solidjs/router";
import { For } from "solid-js";

export default function Nav() {
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
		<nav class="rounded-lg rounded-b-none border-b-4 border-solid border-black bg-yellow">
			<ul class="container flex items-center font-silkscreen">
				<li class="flex p-4">
					<div class="w-6 h-6 bg-accent-red rounded-full" />
				</li>
				<For each={links}>
					{({ href, text }) => (
						<li class="flex">
							<A
								href={href}
								class="p-4 font-bold text-xl cursor-pointer leading-5"
								activeClass="underline"
								inactiveClass="hover:bg-black hover:text-yellow"
							>
								{text}
							</A>
						</li>
					)}
				</For>
			</ul>
		</nav>
	);
}
