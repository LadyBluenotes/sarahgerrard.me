import { For, ParentComponent, Show } from "solid-js";
import { SectionCard } from "./SectionCard";
import { CardProps, ProjectData } from "@repo/utils/types";
import Icon from "./Icon";
import Button from "./Button";
import { Badge } from "./Badge";

export const Card: ParentComponent<CardProps> = (props) => (
	<SectionCard
		class="card"
		elevation={props.elevation || "low"}
		title={props.title || undefined}
	>
		<Show
			when={props.project}
			fallback={<>{props.children}</>}
		>
			{(_) => {
				const project: ProjectData = props.project!;
				return (
					<div class="card-inner">
						<div class="card-image-container">
							<img
								src={project.image}
								alt={project.title}
								class="card-image"
								loading="lazy"
							/>
						</div>

						<div class="card-content">
							<h3 class="card-title">{project.title}</h3>

							<p class="card-description">{project.description}</p>

							<div class="card-technologies">
								<For each={project.technologies}>
									{(tech) => <Badge textValue={tech} />}
								</For>
							</div>

							<div class="card-links">
								<Show when={project.github}>
									<Button
										as={"a"}
										variant="text"
										href={project.github}
										target="_blank"
										class="card-link"
										rel="noopener noreferrer"
										aria-label={`GitHub repository for ${project.title}`}
										style={{
											width: "fit-content",
											"white-space": "nowrap",
											padding: "0 10px 0 0",
										}}
									>
										<Icon name="github" /> Source
									</Button>
								</Show>

								<Show when={project.liveDemo}>
									<Button
										as={"a"}
										variant="text"
										href={project.liveDemo}
										target="_blank"
										rel="noopener noreferrer"
										class="card-link"
										aria-label={`Live demo for ${project.title}`}
										style={{
											width: "fit-content",
											"white-space": "nowrap",
											padding: "0 10px 0 0",
										}}
									>
										<Icon name="external-link" /> Live Demo
									</Button>
								</Show>
							</div>
						</div>
					</div>
				);
			}}
		</Show>
	</SectionCard>
);
