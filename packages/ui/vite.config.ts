// vite.config.ts
import { defineConfig } from "vite";
import path, { resolve } from "path";
import solidPlugin from "vite-plugin-solid";
import UnoCSS from "unocss/vite";

export default defineConfig({
	plugins: [UnoCSS(), solidPlugin()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@Components": path.resolve(__dirname, "src/components"),
			"@Configs": path.resolve(__dirname, "src/config"),
			"@Utils": path.resolve(__dirname, "src/utils"),
		},
	},
});
