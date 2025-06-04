import { ParentComponent, ParentProps } from "solid-js";
import { Header } from "./Header";

export const Layout: ParentComponent = (props: ParentProps) => {
	return (
		<div>
			<Header />
			<main>{props.children}</main>
		</div>
	);
};
