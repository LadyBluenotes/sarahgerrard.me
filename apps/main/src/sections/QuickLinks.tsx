import { For } from "solid-js";
import { SectionContainer, Button } from "@repo/ui/components";

export const QuickLinks = () => {
	const quickLinks: {
		text: string;
		link: () => void;
	}[] = [
		{
			text: "Blog",
			link: () => console.log("blog"),
		},
		{
			text: "Projects",
			link: () => console.log("projects"),
		},
		{
			text: "About",
			link: () => console.log("about"),
		},
		{
			text: "Contact",
			link: () => console.log("contact"),
		},
	];

	return (
		<SectionContainer id="quick-links">
			<h2 class="text-2rem font-bold">Quick links</h2>
			<div class="flex flex-row items-center w-full">
				<ul class="flex w-4xl">
					<For each={quickLinks}>
						{({ text, link }) => (
							<Button
								widthFull
								submitClick={link}
							>
								{text}
							</Button>
						)}
					</For>
				</ul>
			</div>
		</SectionContainer>
	);
};
