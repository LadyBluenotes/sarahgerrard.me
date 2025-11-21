import { ParentComponent } from "solid-js";

export const Layout: ParentComponent = (props) => {
	return (
		<div class="max-w-3xl mx-auto p-6 sm:px-8 lg:px-8">{props.children}</div>
	);
};
