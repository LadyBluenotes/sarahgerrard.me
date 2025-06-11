import { For, Show } from "solid-js";
import { Badge } from "~/components/common/Badge";
import Button from "~/components/common/Button";
import Icon from "~/components/common/Icon";
import { ResumeSection } from "~/components/common/ResumeSection";
import { SectionCard } from "~/components/common/SectionCard";
import { Hero } from "~/components/layout/Hero";
import { Resume, Projects } from "~/data";

export default function ResumePage() {
	const resumeObject = {
		resume: [
			{
				title: "Experience",
				items: Resume.experience,
			},
			{
				title: "Education",
				items: Resume.education,
			},
			{
				title: "Certifications",
				items: Resume.certifications,
			},
		],
		tags: [
			{
				title: "Languages",
				tags: Projects.tags.languages,
			},
			{
				title: "Frameworks & Libraries",
				tags: Projects.tags.frameworks,
			},
			{
				title: "Tools & Platforms",
				tags: Projects.tags.tools,
			},
			{
				title: "Methodologies",
				tags: Projects.tags.methodologies,
			},
		],
	};

	return (
		<div class="resume-page">
			<Hero
				title="Resume"
				subtitle="My professional experience, education, and skills."
			/>

			<div class="container">
				<div class="resume-download">
					<Button
						variant="outline"
						class="download-button"
					>
						<Icon name="download" /> Download Resume (PDF)
					</Button>
				</div>

				<div class="resume-content">
					<For each={resumeObject.resume}>
						{(section) => (
							<Show when={section.items.length > 0}>
								<ResumeSection
									title={section.title}
									items={section.items}
								/>
							</Show>
						)}
					</For>
				</div>

				<section class="resume-section">
					<h2 class="resume-section-title">Skills</h2>
					<div class="skills-categories">
						<For each={resumeObject.tags}>
							{(tagSection) => (
								<SectionCard title={tagSection.title}>
									<div class="skills-list">
										<For each={tagSection.tags}>
											{(tag) => <Badge textValue={tag} />}
										</For>
									</div>
								</SectionCard>
							)}
						</For>
					</div>
				</section>
			</div>
		</div>
	);
}
