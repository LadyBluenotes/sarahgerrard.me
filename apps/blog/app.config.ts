import {
	createWithSolidBase,
	defineTheme,
	withSolidBase,
} from "@kobalte/solidbase/config";
import { defineConfig } from "@solidjs/start/config";
import UnoCSS from "unocss/vite";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import defaultTheme from "@kobalte/solidbase/default-theme";

const theme = defineTheme({
	componentsPath: import.meta.resolve("./src/theme"),
	extends: defaultTheme,
});

export default defineConfig(
	createWithSolidBase(theme)(
		{
			server: {
				prerender: {
					crawlLinks: true,
				},
				esbuild: { options: { target: "es2022" } },
			},
			vite: {
				plugins: [
					UnoCSS({
						configFile: "./uno.config.js",
					}) as any,
				],
			},
		},
		{
			title: "Test",
			description: "Testing",
			lang: "en",
			markdown: {
				expressiveCode: {
					textMarkers: true,
					frames: false,
					themes: ["github-dark-default", "github-light-default"],
					themeCssSelector: (theme) => `[data-theme="${theme.type}"]`,
					plugins: [pluginLineNumbers()],
					styleOverrides: {
						borderWidth: "1px",
					},
				},
				toc: {
					minDepth: 2,
					maxDepth: 4,
				},
				packageManagers: {
					presets: {
						npm: {
							install: "npm i :content",
							"install-dev": "npm i :content -D",
							"install-global": "npm i :content -g",
							"install-local": "npm i",
							run: "npm run :content",
							exec: "npx :content",
							create: "npm init :content",
						},
						pnpm: {
							install: "pnpm i :content",
							"install-dev": "pnpm i :content -D",
							"install-global": "pnpm i :content -g",
							"install-local": "pnpm i",
							run: "pnpm :content",
							exec: "pnpx :content",
							create: "pnpm create :content",
						},
						yarn: {
							install: "yarn add :content",
							"install-dev": "yarn add :content -D",
							"install-global": "yarn add :content -g",
							"install-local": "yarn i",
							run: "yarn :content",
							exec: "yarn dlx :content",
							create: "yarn create :content",
						},
						bun: {
							install: "bun i :content",
							"install-dev": "bun i :content -d",
							"install-global": "bun i :content -g",
							"install-local": "bun i",
							run: "bun run :content",
							exec: "bunx :content",
							create: "bun create :content",
						},
						deno: {
							install: "deno add npm::content",
							"install-dev": "deno add npm::content -D",
							"install-global": "deno add npm::content -g",
							"install-local": "deno i",
							run: "deno run :content",
							exec: "dpx :content",
							create: "deno run -A npm::content",
						},
					},
				},
			},
		}
	)
);
