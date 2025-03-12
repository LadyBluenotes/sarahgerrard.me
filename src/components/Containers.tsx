import { ParentComponent, Show } from "solid-js";
import { Button } from "./Button";

const StyledContainer: ParentComponent = props => {
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
					2024-project.example
				</span>
			</div>
			<div class="border-y-4 border-solid border-black h-175px">
				<img
					src="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					class="w-full h-full object-cover"
					alt=""
				/>
			</div>
			<div class="flex flex-col gap-5 p-8">
				<h3 class="text-3xl font-bold">Test block</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
					quibusdam fugiat vitae dicta aspernatur odio aperiam nulla voluptates
					error, amet explicabo, sit laboriosam tempore excepturi maxime
					doloremque nam. Ducimus, accusamus!
				</p>
				<Button
					type="orange"
					submitClick={() => {}}
				>
					Visit website
				</Button>
			</div>
		</div>
	);
};

const SectionContainer: ParentComponent<{
	noWidth?: boolean;
	class?: string;
	children: any;
	title?: string;
}> = props => (
	<section
		class={`w-full flex flex-col gap-4 ${!props.noWidth ? "max-w-4xl mx-auto" : ""} ${props.class}`}
	>
		<Show when={props.title}>
			<h2 class="text-5xl font-bold">{props.title}</h2>
		</Show>
		{props.children}
	</section>
);

export { StyledContainer, SectionContainer };
