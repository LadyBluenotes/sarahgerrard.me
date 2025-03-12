import { StyledContainer } from "~/components";
import { Hero } from "~/sections/Hero";
import { Projects } from "~/sections/Projects";
import { QuickLinks } from "~/sections/QuickLinks";

export default function Home() {
	return (
		<div>
			<Hero />
			<QuickLinks />
			<Projects />
		</div>
	);
}
