import { For, ParentComponent, Show, Suspense } from "solid-js";
import { ThemeSelectorProps } from "@/utils/types";
import { DropdownMenu } from "@kobalte/core";
import { RoundDiver } from "./icons";
import { A } from "@solidjs/router";
import { links, themes } from "./Layout";

export const MDXLayout: ParentComponent<ThemeSelectorProps> = (props) => (
	<div class="ui-background min-h-screen flex flex-col w-full">
		<nav class="flex justify-between bg-white/70 top-0 w-full p-2 dark:bg-white/30 border-b-1 border-solid border-border">
			<div>
				<RoundDiver class="w-12" />
			</div>
			<Show when={false}>
				<ul class="container flex items-center">
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
			</Show>
			<div class="flex items-center ml-auto">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger class="flex items-center cursor-pointer leading-5 w-fit p-2 fill-secondaryText">
						<div
							class={
								themes.find((theme) => theme.value == props.getThemeVariant)
									?.icon + " text-xl"
							}
						/>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="rounded-lg shadow-lg p-2 flex flex-col gap-2 mt-1 border-1 border-solid border-border bg-decorationbg">
						<For each={themes}>
							{({ value, text, icon }) => (
								<DropdownMenu.Item
									class="flex items-center cursor-pointer py-2 px-4 rounded-lg hover:bg-white/20"
									textValue={value}
									onClick={() => props.setTheme(value)}
								>
									<div class={icon + " "} />
									<span class="pl-2">{text}</span>
								</DropdownMenu.Item>
							)}
						</For>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</nav>
		<Suspense>
			<main class="grow w-full flex flex-col gap-2 max-w-3xl mx-auto ui-foreground px-6 pb-1 my-8 rounded-xl border-1 border-solid border-border">
				{props.children}
			</main>
		</Suspense>
		<footer class="p-4 flex flex-col items-center justify-center bg-white/70 dark:bg-white/30 border-t-1 border-solid border-border">
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
);
