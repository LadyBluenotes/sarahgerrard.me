import { ParentComponent } from "solid-js";
import { Layout } from "./Layout";

export const MDXLayout: ParentComponent = (props) => {
	return (
		<Layout>
			<div class="w-full flex flex-col gap-2 max-w-4xl mx-auto">
				{props.children}
			</div>
		</Layout>
	);
};
