import { DefaultThemeComponentsProvider } from "@kobalte/solidbase/default-theme/context.js";
import { Layout as CustomLayout } from "@repo/ui/components";
import { RouteSectionProps } from "@solidjs/router";

export default function Layout(props: RouteSectionProps) {
	return (
		<DefaultThemeComponentsProvider>
			<CustomLayout>{props.children}</CustomLayout>
		</DefaultThemeComponentsProvider>
	);
}
