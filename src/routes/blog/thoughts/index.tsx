import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/blog/thoughts/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<h1 class="text-2xl font-bold">Thoughts Blog</h1>
			<p>Welcome to the thoughts section of the blog!</p>
		</div>
	);
}
