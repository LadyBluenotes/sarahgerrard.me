import { createFileRoute, Outlet } from "@tanstack/solid-router";
import { allPosts } from "content-collections";
import { Layout } from "~/ui/components/layout/Layout";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/writing")({
	beforeLoad: () => ({
		allPosts,
	}),
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
			<h1>Writing</h1>
			<Outlet />
		</Layout>
	);
}
