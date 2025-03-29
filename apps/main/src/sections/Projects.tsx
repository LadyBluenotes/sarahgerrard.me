import { Component } from "solid-js";
import { StyledContainer, SectionContainer } from "@repo/ui/components";

export const Projects: Component = () => {
	return (
		<SectionContainer
			id="projects"
			title="Projects"
		>
			<ul class="pt-2">
				<StyledContainer
					fileTitle="2024-project-1.ex"
					projectName="Project 1"
					summary="This is a summary of project 1."
					img="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					button={{
						type: "yellow",
						submitClick: () => console.log("Clicked"),
						text: "View project",
					}}
				/>
			</ul>
		</SectionContainer>
	);
};
