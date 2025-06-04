import { defineConfig } from "unocss";

export default defineConfig({
	theme: {
		colors: {},
	},
	shortcuts: {
		// Common styles
		container: "w-full mx-auto",

		// Header styles
		header: "fixed top-0 left-0 w-full",
		"header-container": "flex items-center justify-between h-4.5rem",
		"header-logo": "text-1.5rem",
	},
});
