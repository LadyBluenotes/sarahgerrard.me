import {
	createWithSolidBase,
	defineTheme,
	withSolidBase,
} from "@kobalte/solidbase/config";
import defaultTheme from "@kobalte/solidbase/default-theme";
import { defineConfig } from "@solidjs/start/config";
import UnoCSS from "unocss/vite";

const theme = defineTheme({
	componentsPath: import.meta.resolve("./src/components"),
	extends: defaultTheme,
});

export default defineConfig(
	createWithSolidBase(theme)(
		{
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
			fonts: false,
		}
	)
);
