import { Badge as KBadge } from "@kobalte/core/badge";
import { BadgeProps } from "@repo/utils/types";

export const Badge = (props: BadgeProps) => {
	return (
		<KBadge
			class="badge"
			textValue={props.textValue}
			aria-label={props["aria-label"]}
			{...props}
		>
			{props.children || props.textValue}
		</KBadge>
	);
};
