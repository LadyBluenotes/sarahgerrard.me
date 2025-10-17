import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import "./app.css";
import { SolidBaseRoot } from "@kobalte/solidbase/client";
import "@unocss/reset/tailwind-compat.css";
import "virtual:uno.css";

export default function App() {
	return (
		<Router root={SolidBaseRoot}>
			<FileRoutes />
		</Router>
	);
}
