import { ParentProps } from "solid-js";
import Header from "../components/Header";

export const CustomLayout = (props: ParentProps) => {
	return (
		<div>
			<Header />
			{props.children}
		</div>
	);
};
