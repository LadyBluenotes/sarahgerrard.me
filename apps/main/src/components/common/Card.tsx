import { For, ParentComponent, Show } from "solid-js";
import { SectionCard } from "./SectionCard";
import { CardProps, ProjectData } from "@repo/utils/types";
import Icon from "./Icon";

export const Card: ParentComponent<CardProps> = (props) => {
	return (
		<SectionCard
			class="card"
			elevation={props.elevation || "low"}
			title={props.title || undefined}
		>
			<Show
				when={props.project}
				fallback={<>{props.children}</>}
			>
				{(project: ProjectData) => (
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
									{(tech) => <span class="tech-tag">{tech}</span>}
								</For>
							</div>

							<div class="card-links">
								<Show when={project.github}>
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										class="card-link"
										aria-label={`GitHub repository for ${project.title}`}
									>
										<Icon name="github" /> Source
									</a>
								</Show>

								<Show when={project.liveDemo}>
									<a
										href={project.liveDemo}
										target="_blank"
										rel="noopener noreferrer"
										class="card-link"
										aria-label={`Live demo for ${project.title}`}
									>
										<Icon name="external-link" /> Live Demo
									</a>
								</Show>
							</div>
						</div>
					</div>
				)}
			</Show>
		</SectionCard>
	);
};
