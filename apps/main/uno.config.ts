import {
	defineConfig,
	presetWind,
	presetMini,
	presetAttributify,
} from "unocss";

export default defineConfig({
	presets: [presetWind(), presetMini({}), presetAttributify()],
	theme: {
		animation: {
			fast: "var(--transition-fast)",
			normal: "var(--transition-normal)",
			slow: "var(--transition-slow)",
		},
		colors: {
			// background
			background: "var(--color-background)",
			surface: "var(--color-surface)",
			"surface-elevated": "var(--color-surface-elevated)",

			// text
			"text-primary": "var(--color-text)",
			"text-secondary": "var(--color-text-secondary)",
			"text-tertiary": "var(--color-text-tertiary)",
			"text-on-primary": "var(--color-text-inverted)",

			// border & divider
			border: "var(--color-border)",
			divider: "var(--color-divider)",

			// theme colors
			"theme-primary": "var(--color-primary)",
			"theme-primary-light": "var(--color-primary-light)",
			"theme-primary-dark": "var(--color-primary-dark)",

			"theme-secondary": "var(--color-secondary)",
			"theme-secondary-light": "var(--color-secondary-light)",
			"theme-secondary-dark": "var(--color-secondary-dark)",

			"theme-accent": "var(--color-accent)",
			"theme-accent-light": "var(--color-accent-light)",
			"theme-accent-dark": "var(--color-accent-dark)",

			// status
			"status-success": "var(--color-success)",
			"status-warning": "var(--color-warning)",
			"status-error": "var(--color-error)",
		},
		fontSize: {
			base: "var(--font-size-base)",
		},
		borderRadius: {
			sm: "var(--radius-sm)",
			md: "var(--radius-md)",
			lg: "var(--radius-lg)",
		},
		fontFamily: {
			base: "var(--font-family-base)",
			heading: "var(--font-family-heading)",
		},
		fontWeight: {
			normal: "var(--font-weight-normal)",
			medium: "var(--font-weight-medium)",
			bold: "var(--font-weight-bold)",
		},
		lineHeight: {
			body: "var(--line-height-body)",
			heading: "var(--line-height-heading)",
		},
		spacing: {
			"space-1": "var(--space-1)",
			"space-2": "var(--space-2)",
			"space-3": "var(--space-3)",
			"space-4": "var(--space-4)",
			"space-5": "var(--space-5)",
			"space-6": "var(--space-6)",
			"space-8": "var(--space-8)",
			"space-10": "var(--space-10)",
			"space-12": "var(--space-12)",
		},
		zIndex: {
			base: "var(--z-index-base)",
			dropdown: "var(--z-index-dropdown)",
			sticky: "var(--z-index-sticky)",
			fixed: "var(--z-index-fixed)",
			modal: "var(--z-index-modal)",
			"modal-backdrop": "var(--z-index-modal-backdrop)",
			popover: "var(--z-index-popover)",
			tooltip: "var(--z-index-tooltip)",
		},
	},
	shortcuts: {
		// Common styles
		container: "w-full mx-auto",

		// Header styles
		header: "fixed top-0 left-0 w-full",
		"header-container": "flex items-center justify-between h-4.5rem",
		"header-logo": "text-1.5rem font-[var(--font-family-heading)] font-bold",
		"header-nav": "flex items-center",
		"nav-list": "flex list-none m-0 p-0",
		"nav-item": "",

		// Button styles
		button:
			"inline-flex items-center content-center justify-center border-none relative overflow-hidden cursor-pointer radius-md font-medium font-base",
		"button-primary": "bg-theme-primary text-text-on-primary",
		"button-secondary": "bg-theme-secondary text-text-on-primary",
		"button-outline":
			"bg-transparent color-text-primary border-1 border-solid border-theme-primary",
		"button-text":
			"bg-transparent text-text-primary :hover:bg-[rgba(0,0,0,0.03)]",
		"button-small": "text-[0.875rem] p-[var(--space-1) (var(--space-2))]",
		"button-medium": "text-[1rem] p-[var(--space-2) (var(--space-3))]",
		"button-large": "text-[1.125rem] p-[var(--space-3) (var(--space-4))]",
		"button-full-width": "w-full",
	},
});
