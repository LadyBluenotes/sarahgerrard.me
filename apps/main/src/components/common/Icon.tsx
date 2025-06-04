import { splitProps } from "solid-js";
import { Icon as IconifyIcon } from "@iconify-icon/solid";

const IconName = {
	home: "ri:home-2-line",
	github: "ri:github-line",
	linkedin: "ri:linkedin-fill",
	mail: "ri:mail-line",
	download: "ri:download-line",
	"external-link": "ri:external-link-line",
	moon: "ri:moon-clear-line",
	sun: "ri:sun-line",
	"chevron-right": "ri:arrow-right-s-line",
	"chevron-left": "ri:arrow-left-s-line",
	menu: "ri:menu-line",
	close: "ri:close-circle-line",
};

export interface IconProps {
	name: keyof typeof IconName;
	size?: "small" | "medium" | "large";
	color?: string;
	class?: string;
}

const Icon = (props: IconProps) => {
	const [local, others] = splitProps(props, ["name", "size", "color", "class"]);

	const size = local.size || "medium";
	const classes = ["icon", `icon-${size}`, local.class || ""]
		.filter(Boolean)
		.join(" ");

	return (
		<IconifyIcon
			icon={IconName[local.name]}
			class={classes}
			style={{ color: local.color || "currentColor" }}
			{...others}
		/>
	);
};

export default Icon;
