import { Filter } from "@repo/utils/types";
import { Index, createSignal } from "solid-js";
import Button from "~/components/common/Button";
import { Card } from "~/components/common/Card";
import { Hero } from "~/components/layout/Hero";
import Projects from "~/data/projects.json";

export default function ProjectsPage() {
	const filters: Filter[] = [
		{
			id: "all",
			name: "All",
		},
		{ id: "frontend", name: "Frontend" },
		{ id: "fullstack", name: "Fullstack" },
		{ id: "backend", name: "Backend" },
	];
	const [filter, setFilter] = createSignal<Filter | null>(filters[0]);

	const filteredProjects = () => {
		const allProjects = Projects.projects;
		const tags = Projects.tags;
		if (filter()?.id === "frontend") {
			return allProjects.filter((p) =>
				p.technologies.some((t) => tags.frontend.includes(t))
			);
		} else if (filter()?.id === "fullstack") {
			return allProjects.filter((p) =>
				p.technologies.some(
					(t) => tags.backend.includes(t) && tags.frontend.includes(t)
				)
			);
		} else if (filter()?.id === "backend") {
			return allProjects.filter((p) =>
				p.technologies.some((t) => tags.backend.includes(t))
			);
		} else {
			return allProjects;
		}
	};

	return (
		<div class="projects-page">
			<Hero
				title="My Projects"
				subtitle="A collection of my work, showcasing my skills and experience in web and application development."
			/>

			<section class="section projects-main-section">
				<div class="container">
					<div class="projects-filters">
						<Index each={filters}>
							{(f) => (
								<Button
									variant="outline"
									onClick={() => setFilter(f())}
									style={{
										"text-transform": "capitalize",
										"font-weight": "500",
									}}
									classList={{
										"filter-active": filter().id === f().id,
										"": filter().id !== f().id,
									}}
								>
									{f().name}
								</Button>
							)}
						</Index>
					</div>

					<div class="projects-grid">
						<Index each={filteredProjects()}>
							{(project) => {
								return <Card project={project()} />;
							}}
						</Index>
					</div>
				</div>
			</section>
		</div>
	);
}
