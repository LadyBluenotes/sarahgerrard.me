import { defineConfig } from "@solidjs/start/config";
import { withSolidBase } from "@kobalte/solidbase/config";

export default defineConfig(
	withSolidBase(
		{
			server: {
				prerender: {
					crawlLinks: true,
				},
			},
		},
		{
			title: "SolidBase",
			titleTemplate: ":title - SolidBase",
			description:
				"Fully featured, fully customisable static site generation for SolidStart",
			themeConfig: {
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
		}
	)
);
