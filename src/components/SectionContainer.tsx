import { ParentComponent } from "solid-js";

export const SectionContainer: ParentComponent<{
	noWidth?: boolean;
	children: any;
}> = props => (
	<section
		class={`py-24 w-full flex flex-col ${!props.noWidth ? "max-w-4xl mx-auto" : ""}`}
	>
		{props.children}
	</section>
);
