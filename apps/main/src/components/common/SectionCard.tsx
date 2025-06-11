import { Component, Show, splitProps } from "solid-js";
import { SectionCardProps } from "@repo/utils/types";
import { useLocation } from "@solidjs/router";

export const SectionCard: Component<SectionCardProps> = (props) => {
	const location = useLocation();
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
				<h3
					class="sectioncard-title"
					style={{
						"text-decoration":
							location.pathname === "/resume" ? "underline" : "none",
						"text-underline-offset":
							location.pathname === "/resume" ? "0.3rem" : "0",
					}}
				>
					{local.title}
				</h3>
			</Show>
			<div class="sectioncard-content">{local.children}</div>
		</div>
	);
};
