import { ParentComponent, ParentProps } from "solid-js";
import { Header } from "./Header";

export const Layout: ParentComponent = (props: ParentProps) => {
	return (
		<div class="app">
			<Header />
			<main class="main">{props.children}</main>
		</div>
	);
};
