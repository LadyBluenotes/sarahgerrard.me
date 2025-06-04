import { JSX, ParentProps } from "solid-js";

export type ButtonProps = ParentProps & {
	type?: "container";
	submitClick: () => void;
	isDisabled?: boolean;
	widthFull?: boolean;
};

export type StyledContainerProps = {
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

export type SectionContainerProps = ParentProps & {
	id?: string;
	noWidth?: boolean;
	class?: string;
	children: any;
	title?: string;
};

export type IconProps = {
	class?: string;
	size?: number;
	color?: string;
	alt?: string;
};

export type ThemeSelectorProps = {
	getTheme: string;
	setTheme: () => any;
	getThemeVariant: string;
	tableOfContents: JSX.Element;
};
