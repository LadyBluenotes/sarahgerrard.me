import { splitProps } from "solid-js";
import { Button as KButton } from "@kobalte/core/button";
import { ButtonProps } from "@repo/utils/types";

const Button = (props: ButtonProps) => {
	const [local, others] = splitProps(props, [
		"variant",
		"size",
		"fullWidth",
		"class",
		"children",
	]);

	const variant = local.variant || "primary";
	const size = local.size || "medium";
	const fullWidth = local.fullWidth || false;

	const classes = [
		"button",
		`button-${variant}`,
		`button-${size}`,
		fullWidth ? "button-full-width" : "",
		local.class || "",
	]
		.filter(Boolean)
		.join(" ");

	return (
		<KButton
			as={"button"}
			class={classes}
			{...others}
		>
			{local.children}
		</KButton>
	);
};

export default Button;
