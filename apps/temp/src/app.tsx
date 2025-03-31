import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";

import "./app.css";
import "virtual:uno.css";
import "@unocss/reset/normalize.css";
import { Suspense } from "solid-js";

export default function App() {
	return (
		<Router
			root={(props) => (
				<div
					class="min-h-screen max-w-screen bg-cover bg-center flex justify-center"
					style={{
						"background-image": "url('/windows-xp.jpg')",
						"background-size": "cover",
						"background-repeat": "no-repeat",
						"background-position": "center",
					}}
				>
					<MetaProvider>
						<Title>Sarah Gerrard - Software Developer</Title>
						<Suspense>
							<main class="flex h-full w-full">{props.children}</main>
						</Suspense>
					</MetaProvider>
				</div>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
