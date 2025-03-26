import { Component, ParentComponent, Show } from "solid-js";
import { Button } from "./Button";
import { SectionContainerProps, StyledContainerProps } from "~/types";

const StyledContainer: Component<StyledContainerProps> = props => {
	return (
		<div class="flex flex-col outline-4 outline-solid outline-black bg-white max-w-2xl">
			<div class="bg-accent-yellow h-50px outline-b outline-solid outline-4 flex items-center">
				<div class="flex gap-4 items-center absolute px-4">
					<div class="outline-4 outline-solid outline-black w-3.5 h-3.5 rounded-full bg-white" />
					<div class="outline-4 outline-solid outline-black w-3.5 h-3.5 rounded-full bg-white" />
				</div>
				<span
					aria-hidden
					class="font-bold text-lg mx-auto"
				>
					{props.fileTitle}
				</span>
			</div>
			<div class="border-y-4 border-solid border-black h-175px">
				<img
					src={props.img}
					class="w-full h-full object-cover"
					alt=""
				/>
			</div>
			<div class="flex flex-col gap-5 p-8">
				<h3 class="text-3xl font-bold">{props.projectName}</h3>
				<p class="font-medium">{props.summary}</p>
				<Button
					type={props.button.type}
					submitClick={props.button.submitClick}
				>
					{props.button.text}
				</Button>
			</div>
		</div>
	);
};

const SectionContainer: ParentComponent<SectionContainerProps> = props => (
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

export { StyledContainer, SectionContainer };
