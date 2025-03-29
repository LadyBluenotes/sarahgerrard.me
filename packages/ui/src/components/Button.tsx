import { ParentComponent } from "solid-js";
import { Button as KButton } from "@kobalte/core/button";
import { ButtonProps } from "../../../../../packages/ui/types";

export const Button: ParentComponent<ButtonProps> = (props) => {
	return (
		<KButton
			class={`ui-button-default outline-4 outline-solid outline-black ${props.widthFull ? "w-full" : ""}`}
			classList={{
				"bg-accent-yellow": props.type === "yellow",
				"bg-accent-orange": props.type === "orange",
				"bg-accent-red": props.type === "red",
				"bg-accent-maroon text-white": props.type === "maroon",
				"bg-accent-purple text-white": props.type === "purple",
				"bg-white": !props.type,
			}}
			disabled={props.isDisabled}
			onClick={props.submitClick}
		>
			{props.children}
		</KButton>
	);
};
