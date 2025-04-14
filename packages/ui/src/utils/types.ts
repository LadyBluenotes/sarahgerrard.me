import { ParentProps } from "solid-js";

type ButtonProps = ParentProps & {
	type?: "container";
	submitClick: () => void;
	isDisabled?: boolean;
	widthFull?: boolean;
};

type StyledContainerProps = {
	fileTitle: string;
	img: string;
	projectName: string;
	summary: string;
	button: {
		type: ButtonProps["type"];
		submitClick: ButtonProps["submitClick"];
		text: string;
	};
};

type SectionContainerProps = ParentProps & {
	id?: string;
	noWidth?: boolean;
	class?: string;
	children: any;
	title?: string;
};

type IconProps = {
	class?: string;
	size?: number;
	color?: string;
	alt?: string;
};

type ThemeSelectorProps = {
	getTheme: string;
	setTheme: () => any;
	getThemeVariant: () => any;
};

export type {
	ButtonProps,
	StyledContainerProps,
	SectionContainerProps,
	IconProps,
	ThemeSelectorProps,
};
