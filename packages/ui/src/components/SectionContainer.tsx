import { ParentComponent, Show } from "solid-js";
import { SectionContainerProps } from "../../../../../packages/ui/types";

export const SectionContainer: ParentComponent<SectionContainerProps> = (
	props
) => (
	<section
		id={props.id}
		class={`w-full flex flex-col gap-2 ${!props.noWidth ? "max-w-4xl mx-auto" : ""} ${props.class}`}
	>
		<Show when={props.title}>
			<h2 class="text-5xl font-bold">{props.title}</h2>
		</Show>
		{props.children}
	</section>
);
