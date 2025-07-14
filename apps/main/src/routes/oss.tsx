import { For } from "solid-js";
import { ContributionCard } from "~/components/common/ContributionCard";
import { Hero } from "~/components/layout/Hero";
import { Resume } from "~/data";

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
						<For each={Resume.oss}>
							{(contribution) => (
								<ContributionCard contribution={contribution} />
							)}
						</For>
					</div>
				</div>
			</section>
		</div>
	);
}
