import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";

import "./app.css";
import "virtual:uno.css";
import { Layout } from "@repo/ui/components";

export default function App() {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					<Layout>{props.children}</Layout>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
