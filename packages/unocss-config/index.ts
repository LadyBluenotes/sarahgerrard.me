import {
	defineConfig,
	Preset,
	presetIcons,
	presetMini,
	presetAttributify,
} from "unocss";

export const config = defineConfig({
	presets: [presetMini(), presetAttributify(), presetIcons()] as Preset[],
	theme: {
		colors: {
			background: "var(--background)",
			buttonbg: "var(--button-bg)",
			buttonhover: "var(--button-hover)",
			containerheader: "var(--container-header)",
			containerbg: "var(--container-bg)",
			containerbutton: "var(--container-button)",
		},
	},
	shortcuts: {
		"ui-button-default":
			"p-4 font-bold text-xl cursor-pointer leading-5 ui-button-focus w-fit bg-buttonbg",
		"ui-button-focus":
			"hover:(bg-black text-white) focus-visible:(ring-solid ring-2 ring-accent-yellow ring-offset-2)",
		"ui-link": "underline decoration-2 hover:text-black/70",
	},
});
