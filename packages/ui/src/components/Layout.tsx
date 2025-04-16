import { For, ParentComponent, Suspense } from "solid-js";
import { A } from "@solidjs/router";
import { RoundDiver } from "./icons";
import { ThemeSelectorProps } from "@/utils/types";
import { DropdownMenu } from "@kobalte/core";

export const links = [
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

export const themes: {
	value: string;
	text: string;
	icon: string;
}[] = [
	{
		value: "system",
		text: "System",
		icon: "i-mdi-monitor",
	},
	{
		value: "light",
		text: "Light",
		icon: "i-mdi-white-balance-sunny",
	},
	{
		value: "dark",
		text: "Dark",
		icon: "i-mdi-weather-night",
	},
];

export const Layout: ParentComponent<ThemeSelectorProps> = (props) => (
	<div class="ui-background min-h-screen p-4 flex">
		<div class="ui-foreground flex flex-col w-full rounded-lg">
			<nav class="flex justify-between rounded-t-lg border-b-4 border-solid border-black bg-white">
				<ul class="container flex items-center">
					<li class="flex">
						<div class="p-1">
							<RoundDiver class="w-12" />
						</div>
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
				<div class="flex items-center">
					<DropdownMenu.Root>
						<DropdownMenu.Trigger class="flex items-center ui-button-default ">
							<div
								class={
									themes.find((theme) => theme.value == props.getThemeVariant)
										?.icon
								}
							/>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content class="bg-white rounded-lg shadow-lg p-2 flex flex-col gap-2 mt-1 outline-1 outline-solid">
							<For each={themes}>
								{({ value, text, icon }) => (
									<DropdownMenu.Item
										textValue={value}
										onClick={props.setTheme}
									>
										<div class={icon} />
										<span class="pl-2">{text}</span>
									</DropdownMenu.Item>
								)}
							</For>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</div>
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
