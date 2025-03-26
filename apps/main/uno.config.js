import {
	defineConfig,
	presetWebFonts,
	transformerVariantGroup,
	presetMini,
} from "unocss";
import presetWind4 from "@unocss/preset-wind4";

export default defineConfig({
	presets: [
		presetMini(),
		presetWind4(),
		presetWebFonts({
			fonts: {
				silkscreen: ["Silkscreen"],
				test: ["Suse"],
			},
		}),
	],
	transformers: [transformerVariantGroup()],
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
	},
	shortcuts: {
		"ui-button-default":
			"p-4 font-bold text-xl cursor-pointer leading-5 ui-button-focus w-fit",
		"ui-button-focus":
			"hover:(bg-black text-white) focus-visible:(ring-solid ring-2 ring-accent-yellow ring-offset-2)",
		"ui-link": "underline decoration-2 hover:text-black/70",
	},
});
