import { createFileRoute, Link, Outlet } from "@tanstack/solid-router";
import { Layout } from "~/ui/components/layout/Layout";

export const Route = createFileRoute("/blog")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Layout>
			<h1 class="text-2xl font-bold mb-4">Blog</h1>
			<Outlet />
		</Layout>
	);
}
