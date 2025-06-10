import { Component, Show, splitProps } from "solid-js";
import { SectionCardProps } from "@repo/utils/types";

export const SectionCard: Component<SectionCardProps> = (props) => {
	const [local, others] = splitProps(props, [
		"title",
		"elevation",
		"class",
		"children",
	]);

	const elevation = local.elevation || "low";

	const classes = [
		"sectioncard",
		`sectioncard-elevation-${elevation}`,
		local.class || "",
	]
		.filter(Boolean)
		.join(" ");

	return (
		<div
			class={classes}
			{...others}
		>
			<Show when={local.title}>
				<h3 class="sectioncard-title">{local.title}</h3>
			</Show>
			<div class="sectioncard-content">{local.children}</div>
		</div>
	);
};
