import { OSSContributionCardProps } from "@repo/utils/types";
import { Card } from "./Card";
import Icon from "./Icon";

export const ContributionCard = (props: OSSContributionCardProps) => {
	return (
		<Card class="oss-card">
			<div class="oss-card-inner">
				<div class="oss-header">
					<h3 class="oss-repository">
						<Icon name="github" />
						{props.contribution.repository}
					</h3>
					<span
						class={`oss-type oss-type-${props.contribution.contributionType.toLowerCase()}`}
					>
						{props.contribution.contributionType}
					</span>
				</div>

				<p class="oss-description">{props.contribution.description}</p>

				<div class="oss-links">
					<a
						href={props.contribution.link}
						target="_blank"
						rel="noopener noreferrer"
						class="oss-link"
						aria-label={`Link to ${props.contribution.contributionType} for ${props.contribution.repository}`}
					>
						<Icon name="external-link" /> View Contribution
					</a>
				</div>
			</div>
		</Card>
	);
};
