import { RouteSectionProps } from "@solidjs/router";
import { ErrorBoundary } from "solid-js";

// import { NotFound } from "~/ui/not-found";
import { Layout } from "@repo/ui/components";
import { Title } from "@solidjs/meta";
import { useThemeListener } from "@kobalte/solidbase/client";
import { usePace } from "@kobalte/solidbase/default-theme/pace.js";

export default function (props: RouteSectionProps) {
	useThemeListener();
	usePace();

	return (
		<>
			<Title>Test</Title>
			<ErrorBoundary fallback={() => <div>Nothing found</div>}>
				<Layout>{props.children}</Layout>
			</ErrorBoundary>
		</>
	);
}
