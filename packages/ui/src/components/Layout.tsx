import { For, ParentComponent, Suspense } from "solid-js";
import { A } from "@solidjs/router";

export const Layout: ParentComponent = (props) => {
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
		<div class="bg-background min-h-screen p-4 flex">
			<div class="bg-foreground flex flex-col w-full rounded-lg">
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
				<Suspense>
					<main class="grow">{props.children}</main>
				</Suspense>
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
			</div>
		</div>
	);
};
