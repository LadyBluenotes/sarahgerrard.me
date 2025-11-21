import { defineConfig } from "vite";
import contentCollections from "@content-collections/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/solid-start/plugin/vite";
import viteSolid from "vite-plugin-solid";
import UnoCSS from "unocss/vite";

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		contentCollections(),
		tsConfigPaths({
			projects: ["./tsconfig.json"],
		}),
		tanstackStart(),
		viteSolid({ ssr: true }),
		UnoCSS(),
	],
});
