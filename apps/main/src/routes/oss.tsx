import { For } from "solid-js";
import { ContributionCard } from "~/components/common/ContributionCard";
import { Hero } from "~/components/layout/Hero";
import Projects from "~/data/projects";

export default function OSS() {
	return (
		<div class="oss-page">
			<Hero
				title="Open Source Contributions"
				subtitle="I believe in the power of open source and regularly contribute to projects I use and care about."
			/>

			<section class="section oss-section">
				<div class="container">
					<div class="oss-intro">
						<p>
							Contributing to open source has been fundamental to my growth. I
							actively contribute to open-source projects through bug reports,
							feature implementations, and documentation improvements. Here are
							some of my contributions:
						</p>
					</div>

					<div class="oss-contributions">
						<For each={Projects.oss}>
							{(contribution) => (
								<ContributionCard contribution={contribution} />
							)}
						</For>
					</div>
				</div>
			</section>

			<section class="section oss-philosophy-section">
				<div class="container">
					<h2 class="section-title">My Open Source Philosophy</h2>

					<div class="oss-philosophy-content">
						<div class="oss-philosophy-item">
							<h3>Empathy in Action</h3>
							<p>
								I strive to consider the people my work affects, from the
								end-user to the maintainer reviewing my code. This means writing
								clear issues, providing context in pull requests, and
								anticipating questions to make the collaboration process as
								smooth and efficient as possible.
							</p>
						</div>

						<div class="oss-philosophy-item">
							<h3>Incremental Impact</h3>
							<p>
								I follow an "upstream first" methodology, focusing on
								contributing small, well-defined changes that are easy to review
								and integrate. I believe that consistent, incremental
								improvements are the most sustainable way to move a project
								forward and ensure the benefits the entire community.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
