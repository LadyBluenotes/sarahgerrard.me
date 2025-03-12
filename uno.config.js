import { defineConfig, presetWebFonts, presetMini } from "unocss";

export default defineConfig({
	presets: [
		presetMini(),
		presetWebFonts({
			fonts: {
				silkscreen: ["Silkscreen"],
				test: ["Suse"],
			},
		}),
	],
	theme: {
		colors: {
			accent: {
				yellow: "#FEC631",
				orange: "#F9591F",
				red: "#F21E2C",
				maroon: "#B21D3B",
				purple: "#6A1D41",
			},
			black: "#1C1C1C",
		},
		shortcuts: {},
	},
});
