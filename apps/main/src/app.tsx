import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import { Footer, Nav } from "@repo/ui/components";

import "./app.css";
import "virtual:uno.css";

export default function App() {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					<div class="bg-black min-h-screen p-4 flex">
						<div class="bg-background flex flex-col w-full rounded-lg">
							<Nav />
							<Suspense>
								<main class="grow text-black">{props.children}</main>
							</Suspense>
							<Footer />
						</div>
					</div>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
