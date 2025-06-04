import {
	defineConfig,
	presetIcons,
	presetMini,
	presetAttributify,
	presetWind3,
} from "unocss";

const UnoConfig = defineConfig({
	presets: [
		presetWind3(),
		presetMini({
			dark: {
				dark: '[data-theme*="dark"]',
			},
		}),
		presetAttributify(),
		presetIcons({
			scale: 1.2,
			prefix: "i-",
			extraProperties: {
				display: "inline-block",
			},
		}),
	],
	theme: {
		colors: {
			decorationbg: "var(--decoration-bg)",
			primaryText: "var(--primary-text)",
			secondaryText: "var(--secondary-text)",
			primary: "var(--primary)",
			border: "var(--border)",
		},
		fonts: {
			body: "var(--font-body)",
			heading: "var(--font-heading)",
			mono: "var(--font-mono)",
		},
	},
	shortcuts: {
		"ui-button-default":
			"p-2 font-bold cursor-pointer leading-5 ui-button-focus w-fit",
		"ui-button-focus":
			"hover:(bg-black text-white) focus-visible:(ring-2 ring-offset-2)",
		"ui-link": "underline decoration-2 hover:text-black/70",
		"ui-toc-list": "flex flex-col gap-4",
	},
});

export default UnoConfig;
