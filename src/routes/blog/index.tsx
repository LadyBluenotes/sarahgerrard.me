import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/blog/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/blog/"!</div>;
}
