import { Button } from "@kobalte/core/button";
import { ThemeSelector } from "./ThemeSelector";
import { A } from "@solidjs/router";

export default function Header() {
	return (
		<>
			<header class="mx-auto max-w-3xl flex justify-between px-6 sm:px-8 py-4 lg:px-8">
				<A
					href="/"
					class="initials text-[3rem] leading-none -mt-4"
					activeClass=""
				>
					<span>sg</span>
				</A>
				<nav class="flex items-center gap-6 text-sm font-medium">
					<A href="/about">About</A>
					<A href="/blog">Blog</A>
					<A href="/projects">Projects</A>
					<A href="/oss">OSS</A>
					<Button
						as="a"
						href="https://bsky.app/profile/ladybluenotes.dev"
						target="_blank"
						title="Bluesky"
					>
						<div class="i-tabler-brand-bluesky w-1.4em h-1.4em" />
					</Button>
					<Button
						as="a"
						href="https://github.com/ladybluenotes"
						target="_blank"
						title="GitHub"
					>
						<div class="i-tabler-brand-github w-1.4em h-1.4em" />
					</Button>
					<ThemeSelector />
				</nav>
			</header>
			<section class="border-y border-border/50 border-[--border-color] z-[1] relative border-t-border dark:border-t-border/50">
				<div class="h-1 w-full" />
			</section>
		</>
	);
}
