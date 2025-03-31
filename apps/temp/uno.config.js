import {
	defineConfig,
	presetIcons,
	presetMini,
	presetAttributify,
	presetWind,
} from "unocss";

export const config = defineConfig({
	presets: [presetMini(), presetAttributify(), presetIcons(), presetWind()],
	theme: {},
	shortcuts: {},
});
