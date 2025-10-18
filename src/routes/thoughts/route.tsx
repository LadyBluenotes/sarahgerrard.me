import { createFileRoute } from "@tanstack/solid-router";
import { Layout } from "~/ui/components/layout/Layout";

export const Route = createFileRoute("/thoughts")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Layout>
			<h1 class="text-2xl font-bold">Thoughts Blog</h1>
		</Layout>
	);
}
