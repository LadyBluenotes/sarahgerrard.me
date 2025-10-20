import { createFileRoute, Link, Outlet } from "@tanstack/solid-router";
import { Layout } from "~/ui/components/layout/Layout";
import { allBlogs } from "content-collections";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/blog")({
	head: () => ({
		meta: [
			...seo({
				title: "Blog - Sarah Gerrard",
			}),
		],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Layout>
			<h1>Bloggy</h1>
			<Outlet />
		</Layout>
	);
}
