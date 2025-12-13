import { ThemeSelector } from "./ThemeSelector";
import { Index, Show } from "solid-js";
import { Link } from "@tanstack/solid-router";

const blogLinks = [
	{
		href: "/posts",
		label: "Posts",
	},
	{
		href: "https://bsky.app/profile/ladybluenotes.dev",
		label: "Bluesky",
		iconClass: "i-tabler-brand-bluesky",
	},
	{
		href: "https://github.com/ladybluenotes",
		label: "GitHub",
		iconClass: "i-tabler-brand-github",
	},
];

export default function Header() {
	return (
		<>
			<header class="mx-auto max-w-3xl flex justify-between px-6 sm:px-8 py-4 lg:px-8">
				<a
					href="/"
					class="initials text-[3rem] leading-none -mt-4"
				>
					<span>sg</span>
				</a>
				<nav class="flex items-center gap-6 text-sm font-medium">
					<Index each={blogLinks}>
						{(link) => (
							<Link
								to={link().href.startsWith("/") ? link().href : undefined}
								target={link().href.startsWith("http") ? "_blank" : undefined}
								title={link().label}
								class="header-link"
							>
								<Show
									when={link().iconClass}
									fallback={link().label}
								>
									<div class={`${link().iconClass} w-1.2em h-1.2em icon`} />
								</Show>
							</Link>
						)}
					</Index>
					<ThemeSelector />
				</nav>
			</header>
			<hr class="border-y border-border/50 border-[--border-color] z-[1] relative border-t-border dark:border-t-border/50 h-[5px]" />
		</>
	);
}
