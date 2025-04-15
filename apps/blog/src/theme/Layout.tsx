import { RouteSectionProps } from "@solidjs/router";
import { ErrorBoundary } from "solid-js";

// import { NotFound } from "~/ui/not-found";
import { MDXLayout } from "@repo/ui/components";
import { Title } from "@solidjs/meta";
import {
	getTheme,
	setTheme,
	getThemeVariant,
	useThemeListener,
} from "@kobalte/solidbase/client";
import { usePace } from "@kobalte/solidbase/default-theme/pace.js";

export default function (props: RouteSectionProps) {
	useThemeListener();
	usePace();

	return (
		<>
			<Title>Test</Title>
			<ErrorBoundary fallback={() => <div>Nothing found</div>}>
				<MDXLayout
					getTheme={getTheme()}
					setTheme={setTheme}
					getThemeVariant={getThemeVariant()}
				>
					{props.children}
				</MDXLayout>
			</ErrorBoundary>
		</>
	);
}
