import { For, Index, Show } from "solid-js";
import { Badge } from "./Badge";
import { ResumeSectionProps } from "@repo/utils/types";

export const ResumeSection = (props: ResumeSectionProps) => {
	const formatDescription = (section: {
		summary?: string;
		list?: string[];
	}) => (
		<div>
			<Show when={section.summary}>
				<p class="resume-section-summary">{section.summary}</p>
			</Show>
			<ul class="resume-item-list">
				<For each={section.list}>{(item) => <li>{item}</li>}</For>
			</ul>
		</div>
	);

	return (
		<section class="resume-section">
			<h2 class="resume-section-title">{props.title}</h2>

			{props.children}

			<div class="resume-items">
				<For each={props.items}>
					{(item) => (
						<div class="resume-item">
							<div class="resume-item-header">
								<div class="resume-item-title-group">
									<h3 class="resume-item-title">{item.title}</h3>
									<div class="resume-item-org">{item.organization}</div>
								</div>

								<div class="resume-item-meta">
									<div class="resume-item-date">
										{item.startDate}
										{item.endDate ? ` - ${item.endDate}` : " - Present"}
									</div>

									<Show when={item.location}>
										<div class="resume-item-location">{item.location}</div>
									</Show>
								</div>
							</div>

							<div class="resume-item-body">
								{formatDescription(item.description)}

								<Show when={item.skills && item.skills.length > 0}>
									<div class="resume-item-skills">
										<Index each={item.skills}>
											{(skill) => <Badge textValue={skill()} />}
										</Index>
									</div>
								</Show>
							</div>
						</div>
					)}
				</For>
			</div>
		</section>
	);
};
