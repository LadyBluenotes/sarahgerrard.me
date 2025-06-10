import { ParentComponent, Show } from "solid-js";
import Button from "../common/Button";
import { HeroProps } from "@repo/utils/types";

export const Hero: ParentComponent<HeroProps> = (props) => {
	return (
		<section class="hero">
			<div class="container hero-container">
				<div class="hero-content">
					<Show when={props.title}>
						<h1 class="hero-title">{props.title}</h1>
					</Show>
					<Show when={props.subtitle}>
						<p class="hero-subtitle">{props.subtitle}</p>
					</Show>
					{props.children}
					<Show when={props.ctaText && props.ctaLink}>
						<div class="hero-cta">
							<Button
								as="a"
								href={props.ctaLink}
								size="large"
							>
								{props.ctaText}
							</Button>
						</div>
					</Show>
				</div>
			</div>
		</section>
	);
};
