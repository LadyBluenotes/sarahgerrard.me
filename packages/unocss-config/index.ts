import {
	defineConfig,
	Preset,
	presetIcons,
	presetMini,
	presetAttributify,
	presetWind,
} from "unocss";

export const config = defineConfig({
	presets: [
		presetMini(),
		presetAttributify(),
		presetIcons({
			scale: 1.2,
			prefix: "i-",
			extraProperties: {
				display: "inline-block",
			},
		}),
		presetWind(),
	] as Preset[],
	theme: {
		colors: {
			decorationbg: "var(--decoration-bg)",
			primaryText: "var(--primary-text)",
			secondaryText: "var(--secondary-text)",
			primary: "var(--primary)",
			accent: "var(--accent)",
		},
		fonts: {
			body: "var(--font-body)",
			heading: "var(--font-heading)",
			mono: "var(--font-mono)",
		},
	},
	shortcuts: {
		"ui-button-default":
			"p-4 font-bold text-xl cursor-pointer leading-5 ui-button-focus w-fit bg-accent",
		"ui-button-focus":
			"hover:(bg-black text-white) focus-visible:(ring-solid ring-2 ring-accent-yellow ring-offset-2)",
		"ui-link": "underline decoration-2 hover:text-black/70",
	},
});
