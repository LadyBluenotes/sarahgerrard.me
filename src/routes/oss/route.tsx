import { createFileRoute } from "@tanstack/solid-router";
import { Layout } from "~/ui/components/layout/Layout";

export const Route = createFileRoute("/oss")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Layout>
			<h1>Open Source Contributions</h1>
		</Layout>
	);
}
