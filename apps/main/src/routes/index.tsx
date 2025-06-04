import { mobileLayout } from "@repo/utils/helpers";
import { A } from "@solidjs/router";
import Button from "~/components/common/Button";
import { Hero } from "~/components/layout/Hero";

export default function Home() {
	return (
		<div>
			<Hero
				title="Hello, I'm Sarah"
				subtitle="This is my personal website built with SolidJS and TypeScript."
			>
				<div
					class="hero-actions"
					classList={{
						"flex-col w-full mx-auto max-w-300px gap[var(--space-2)]":
							mobileLayout(),
					}}
				>
					<Button
						as={A}
						href="/projects"
						variant="primary"
						size="large"
					>
						View My Work
					</Button>
					<Button
						as={A}
						href="/contact"
						variant="outline"
						size="large"
					>
						Get In Touch
					</Button>
				</div>
			</Hero>
		</div>
	);
}
