import { For, ParentComponent, Show } from "solid-js";
import { ThemeSelectorProps } from "@/utils/types";
import { DropdownMenu } from "@kobalte/core";
import { RoundDiver } from "./icons";
import { A } from "@solidjs/router";
import { links, themes } from "./Layout";

export const MDXLayout: ParentComponent<ThemeSelectorProps> = (props) => (
	<div class="ui-background min-h-screen flex flex-col w-full">
		<nav class="flex justify-between bg-white/70 w-full p-2 dark:bg-white/30 border-b-1 border-solid border-border">
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
		<div class="flex gap-4 relative">
			<aside class="bg-red min-w-14rem mt-6">
				<span>side nav</span>
			</aside>
			<main class="flex flex-1 gap-4 mx-4 mt-6">
				<div class="flex mx-auto flex-col gap-2 max-w-3xl lg:max-w-4xl ui-foreground px-6 pb-1 rounded-xl border-1 border-solid border-border">
					{props.children}
				</div>
				{props.tableOfContents}
			</main>
		</div>
	</div>
);
