import { Button } from "@kobalte/core/button";
import { Show } from "solid-js";

interface SocialButtonOptions {
	title?: string;
	iconClass: string;
	ariaLabel: string;
	link: string;
}

interface SocialButtonProps {
	type: keyof typeof socialButtonOptions;
}

const socialButtonOptions: Record<string, SocialButtonOptions> = {
	github: {
		title: "GitHub",
		iconClass: "i-tabler-brand-github",
		ariaLabel: "GitHub Profile",
		link: "https://github.com/ladybluenotes",
	},
	linkedin: {
		title: "LinkedIn",
		iconClass: "i-tabler-brand-linkedin",
		ariaLabel: "LinkedIn Profile",
		link: "https://www.linkedin.com/in/sarahgerrard",
	},
	bsky: {
		title: "Bluesky",
		iconClass: "i-tabler-brand-bluesky",
		ariaLabel: "Bluesky Profile",
		link: "https://bsky.app/profile/ladybluenotes.dev",
	},
	emailme: {
		iconClass: "i-tabler-mail",
		ariaLabel: "Email Me",
		link: "mailto:hello@sarahgerrard.me",
	},
};

export const SocialButton = (props: SocialButtonProps) => {
	return (
		<Button
			as="a"
			aria-label={socialButtonOptions[props.type].ariaLabel}
			href={socialButtonOptions[props.type].link}
			target="_blank"
			rel="noopener noreferrer"
			class="social-button"
		>
			<div
				class={`${socialButtonOptions[props.type].iconClass} h-1.5em w-1.5em icon`}
			/>
			<span class="text-sm">
				<Show
					when={socialButtonOptions[props.type].title}
					fallback={socialButtonOptions[props.type].ariaLabel}
				>
					{socialButtonOptions[props.type].title}
				</Show>
			</span>
		</Button>
	);
};
