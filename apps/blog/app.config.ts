import { withSolidBase } from "@kobalte/solidbase/config";
import { defineConfig } from "@solidjs/start/config";
import UnoCSS from "unocss/vite";

export default defineConfig(
	withSolidBase(
		{
			ssr: false,
			vite: {
				plugins: [
					UnoCSS({
						configFile: "./unocss.config.js",
					}),
				],
			},
		},
		{
			title: "Test",
			description: "Testing",
			lang: "en",
		}
	)
);
