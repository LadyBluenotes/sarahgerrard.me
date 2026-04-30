import { ParentComponent } from "solid-js";

export const Layout: ParentComponent = (props) => {
	return (
		<main class="flex flex-col p-6 sm:px-8 justify-self-center">
			{props.children}
		</main>
	);
};
