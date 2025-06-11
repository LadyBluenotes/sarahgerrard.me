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
	as?: "button" | "a" | string | typeof A;
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

export interface SectionCardProps extends ParentProps {
	title?: string;
	elevation?: "flat" | "low" | "medium" | "high";
	class?: string;
}

export interface ProjectData {
	id: string;
	title: string;
	description?: string;
	image?: string;
	technologies: string[];
	github?: string;
	liveDemo?: string;
}

export interface CardProps extends SectionCardProps {
	project?: ProjectData;
}

export interface IconNameProps {
	[key: string]: string;
}

export interface IconProps {
	name: keyof IconNameProps | string;
	size?: "small" | "medium" | "large";
	color?: string;
	class?: string;
}

export interface OSSContributionData {
	id: string;
	repository: string;
	description: string;
	contributionType: "PR" | "Issue" | "Maintainer" | "Other";
	link: string;
}

export interface OSSContributionCardProps {
	contribution: OSSContributionData;
}

type FilterType = "all" | "frontend" | "fullstack" | "backend";

export interface Filter {
	id: FilterType;
	name: string;
}

export interface BadgeProps extends ParentProps {
	textValue?: string;
	"aria-label"?: string;
	children?: JSX.Element | string;
	class?: string;
}
