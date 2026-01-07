import { createFileRoute, Outlet } from "@tanstack/solid-router";
import { Layout } from "~/ui/components/layout/Layout";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/posts")({
	head: () => ({
		meta: [
			...seo({
				title: "Writing - Sarah Gerrard",
			}),
		],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Layout>
			<Outlet />
		</Layout>
	)
}
