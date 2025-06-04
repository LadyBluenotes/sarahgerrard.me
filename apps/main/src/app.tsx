import "@unocss/reset/tailwind.css";
import "@repo/styling/stylesheets";
import "virtual:uno.css";

import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { Layout } from "./components/layout/Layout";
import { ThemeProvider } from "@repo/utils/useTheme";

export default function App() {
	return (
		<Router
			root={(props) => (
				<ThemeProvider>
					<Layout>
						<Suspense>{props.children}</Suspense>
					</Layout>
				</ThemeProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
