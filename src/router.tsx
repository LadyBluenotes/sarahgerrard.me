import { createRouter } from "@tanstack/solid-router";
import { routeTree } from "./routeTree.gen";
import { DefaultCatchBoundary } from "./ui/components/errors/DefaultCatchBoundary";
import { NotFound } from "./ui/components/errors/NotFound";

export function getRouter() {


  return createRouter({
		routeTree,
		defaultPreload: "intent",
		defaultErrorComponent: DefaultCatchBoundary,
		defaultNotFoundComponent: () => <NotFound />,
		scrollRestoration: true,
	});
}
