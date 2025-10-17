import Layout from "@kobalte/solidbase/default-theme/Layout.jsx";
import {
	DefaultThemeComponentsProvider,
	DefaultThemeStateProvider,
} from "@kobalte/solidbase/default-theme/context";
import { ComponentProps } from "solid-js";
import { CustomLayout } from "./Layout/Custom-Layout";
import { useThemeListener } from "@kobalte/solidbase/client";
import { usePace } from "@kobalte/solidbase/default-theme/pace.js";
import Article from "@kobalte/solidbase/default-theme/components/Article.jsx";

export default function (props: ComponentProps<typeof Layout>) {
	usePace();
	useThemeListener();
	return (
		<DefaultThemeStateProvider>
			<DefaultThemeComponentsProvider
				components={{
					Article: Article,
				}}
			>
				<CustomLayout {...props} />
			</DefaultThemeComponentsProvider>
		</DefaultThemeStateProvider>
	);
}
