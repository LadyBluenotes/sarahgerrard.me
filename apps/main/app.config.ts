import { defineConfig } from "@solidjs/start/config";
import { createWithSolidBase, defineTheme } from "@kobalte/solidbase/config";
import defaultTheme from "@kobalte/solidbase/default-theme";
import UnoCSS from "unocss/vite";

const customTheme = defineTheme({
	componentsPath: import.meta.resolve("./src/ui"),
	extends: defaultTheme,
});

export default defineConfig(
	createWithSolidBase(customTheme)(
		{
			server: {
				prerender: {
					crawlLinks: true,
				},
			},
			vite: {
				plugins: [
					UnoCSS({
						configFile: "./unocss.config.ts",
					}),
				],
			},
		},
		{
			title: "SolidBase",
			titleTemplate: ":title - SolidBase",
			description:
				"Fully featured, fully customisable static site generation for SolidStart",
			themeConfig: {
				fonts: false,
				sidebar: {
					"/": {
						items: [
							{
								title: "Overview",
								collapsed: false,
								items: [
									{
										title: "Home",
										link: "/",
									},
									{
										title: "About",
										link: "/about",
									},
								],
							},
						],
					},
				},
			},
			markdown: {
				expressiveCode: {
					themes: ["vitesse-light", "vitesse-dark"],
				},
			},
		}
	)
);
