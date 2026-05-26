import { defineConfig, presetIcons, presetWind4 } from "unocss";

export default defineConfig({
  presets: [
    presetWind4({
      darkMode: "class",
    }),
    presetIcons({
      scale: 1,
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
      collections: {
        tabler: () =>
          import("@iconify-json/tabler/icons.json").then(
            (i) => i.default as unknown as Record<string, unknown>,
          ),
      },
    }),
  ],
  safelist: [
    "i-tabler-brand-github",
    "i-tabler-brand-bluesky",
    "i-tabler-brand-linkedin",
    "i-tabler-rss",
    "i-tabler-mail",
    "i-tabler-moon-stars",
    "i-tabler-sun-filled",
    "i-tabler-chevron-left",
  ],
});
