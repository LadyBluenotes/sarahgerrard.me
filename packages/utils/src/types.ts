import { JSX, ParentProps } from "solid-js";
import { A } from "@solidjs/router";

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
	as: "button" | "a" | string | typeof A;
	variant?: "primary" | "secondary" | "outline" | "text";
	size?: "small" | "medium" | "large";
	fullWidth?: boolean;
	href?: string;
}

export interface HeroProps extends ParentProps {
	title: string;
	subtitle?: string;
	ctaText?: string;
	ctaLink?: string;
}
