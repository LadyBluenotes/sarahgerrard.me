import { createFileRoute, Outlet } from "@tanstack/solid-router";
import { Layout } from "~/ui/components/layout/Layout";

export const Route = createFileRoute("/oss")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Layout>
			<h1>Open Source</h1>
			<Outlet />
		</Layout>
	);
}
