import { createSignal, onMount } from "solid-js";
import { Button } from "~/components/Button";
import { SectionContainer } from "~/components/Containers";
import { createResizeObserver } from "@solid-primitives/resize-observer";

export const QuickLinks = () => {
	const [offsetMargin, setOffsetMargin] = createSignal(0);
	const [ref, setRef] = createSignal<HTMLDivElement | null>(null);

	onMount(() => {
		createResizeObserver(ref(), ({ width }, el) => {
			if (el === ref()) setOffsetMargin(width);
		});
	});

	return (
		<SectionContainer noWidth>
			<h2
				class="text-2rem font-bold"
				style={{
					"margin-left": `${offsetMargin()}px`,
				}}
			>
				Quick links
			</h2>
			<div class="flex flex-row items-center w-full">
				<div
					ref={setRef}
					class="border-b-4 border-solid border-black grow"
				/>
				<div class="flex w-4xl">
					<Button
						widthFull
						submitClick={() => console.log("blog")}
					>
						Blog
					</Button>
					<Button
						widthFull
						submitClick={() => console.log("projects")}
					>
						Projects
					</Button>
					<Button
						widthFull
						submitClick={() => console.log("about")}
					>
						About
					</Button>
					<Button
						widthFull
						submitClick={() => console.log("contact")}
					>
						Contact
					</Button>
				</div>
				<div class="border-b-4 border-solid border-black grow" />
			</div>
		</SectionContainer>
	);
};
