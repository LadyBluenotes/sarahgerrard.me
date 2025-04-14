import { SectionContainer, Button } from "@repo/ui/components";

export const Hero = () => {
	return (
		<SectionContainer
			id="hero"
			class="pb-24"
		>
			<div class="flex gap-4">
				<div class="flex flex-col gap-4 w-70%">
					<h1 class="text-4rem leading-18 font-black">
						Hi! <br />
						I'm <span class="">Sarah</span>
					</h1>
					<span class="text-2xl">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					</span>
					<Button
						type="orange"
						submitClick={() => {}}
					>
						Learn more about me
					</Button>
				</div>
				<div class="flex flex-col gap-4 w-30% items-center">
					<img
						src="/img/robot.svg"
						class="h-250px w-fit"
					/>
				</div>
			</div>
		</SectionContainer>
	);
};
