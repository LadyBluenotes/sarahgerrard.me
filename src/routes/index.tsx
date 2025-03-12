import { StyledContainer } from "~/components";
import { Hero } from "~/sections/Hero";
import { Projects } from "~/sections/Projects";
import { QuickLinks } from "~/sections/QuickLinks";

export default function Home() {
	return (
		<div class="flex flex-col gap-24 pt-30 pb-16">
			<Hero />
			<QuickLinks />
			<Projects />
		</div>
	);
}
