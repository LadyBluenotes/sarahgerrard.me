import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/oss/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/oss/"!</div>;
}
