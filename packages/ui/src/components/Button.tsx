import { ParentComponent } from "solid-js";
import { Button as KButton } from "@kobalte/core/button";
import { ButtonProps } from "../utils/types";

export const Button: ParentComponent<ButtonProps> = (props) => {
	return (
		<KButton
			class={`ui-button-default outline-4 outline-solid outline-black ${props.widthFull ? "w-full" : ""}`}
			disabled={props.isDisabled}
			onClick={props.submitClick}
		>
			{props.children}
		</KButton>
	);
};
