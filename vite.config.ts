import { defineConfig } from "vite";
import contentCollections from "@content-collections/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/solid-start/plugin/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";
import viteSolid from "vite-plugin-solid";
import UnoCSS from "unocss/vite";

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		netlify(),
		tsConfigPaths({
			projects: ["./tsconfig.json"],
		}),
		tanstackStart(),
		contentCollections(),
		viteSolid({ ssr: true }),
		UnoCSS(),
	],
});
