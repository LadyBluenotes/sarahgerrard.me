import { Component } from "solid-js";
import { Button } from "./Button";
import { StyledContainerProps } from "../utils/types";

export const StyledContainer: Component<StyledContainerProps> = (props) => {
	return (
		<div class="flex flex-col outline-4 outline-solid outline-black bg-containerbg max-w-2xl">
			<div class="bg-containerheader h-50px outline-b outline-solid outline-4 flex items-center">
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
					type="container"
					submitClick={props.button.submitClick}
				>
					{props.button.text}
				</Button>
			</div>
		</div>
	);
};
