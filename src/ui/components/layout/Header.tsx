import { Button } from "@kobalte/core/button";
import { ThemeSelector } from "./ThemeSelector";

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
					<a href="/about">About</a>
					<a href="/blog">Blog</a>
					<a href="/projects">Projects</a>
					<a href="/oss">OSS</a>
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