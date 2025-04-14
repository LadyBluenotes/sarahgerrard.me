import { ParentComponent } from "solid-js";
import { Layout } from "./Layout";
import { ThemeSelectorProps } from "@/utils/types";

export const MDXLayout: ParentComponent<ThemeSelectorProps> = (props) => {
	return (
		<Layout
			getTheme={props.getTheme}
			setTheme={props.setTheme}
			getThemeVariant={props.getThemeVariant}
		>
			<div class="w-full flex flex-col gap-2 max-w-4xl mx-auto">
				{props.children}
			</div>
		</Layout>
	);
};
