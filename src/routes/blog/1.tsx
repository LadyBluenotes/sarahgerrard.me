import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/blog/1")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<h1>This is blog post 1</h1>
		</div>
	);
}
