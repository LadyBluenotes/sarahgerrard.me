import { JSX } from "solid-js";

export type ThemeKey = "base" | "bw" | "pastelPink" | "seaTones";
export interface ThemeDef {
	name: string;
	class: string;
}

export type Themes = Record<ThemeKey, ThemeDef>;

export interface ThemeContextType {
	theme: () => ThemeKey;
	setTheme: (theme: ThemeKey) => void;
	themes: Themes;
}

export interface ButtonProps
	extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "outline" | "text";
	size?: "small" | "medium" | "large";
	fullWidth?: boolean;
}
