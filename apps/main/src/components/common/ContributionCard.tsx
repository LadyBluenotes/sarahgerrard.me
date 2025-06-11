import { OSSContributionCardProps } from "@repo/utils/types";
import { Card } from "./Card";
import Icon from "./Icon";
import { Badge } from "./Badge";

export const ContributionCard = (props: OSSContributionCardProps) => {
	return (
		<Card class="oss-card">
			<div class="oss-card-inner">
				<div class="oss-header">
					<h3 class="oss-repository">
						<Icon name="github" />
						{props.contribution.repository}
					</h3>
					<Badge
						class="oss-badge"
						textValue={props.contribution.contributionType}
					/>
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
