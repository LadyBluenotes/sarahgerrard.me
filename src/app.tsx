import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
import "./style.css";

import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { Nav } from "~/components";

export default function App() {
	return (
		<Router
			root={props => (
				<div class="bg-black min-h-screen p-4 flex">
					<div class="cursor" />
					<div class="bg-#fffde9 flex flex-col w-full">
						<Nav />
						<Suspense>
							<main class="grow font-hubot text-black">{props.children}</main>
						</Suspense>
					</div>
				</div>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
