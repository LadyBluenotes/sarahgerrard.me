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
			<h1 class="text-2xl font-bold mb-4">Blog</h1>
			<ul>
				{allBlogs.map((blog) => {
					return (
						<li class="mb-2">
							<Link
								to={`/blog/${blog._meta.path}`}
								class="bold i"
							>
								{blog.title}
							</Link>
						</li>
					);
				})}
			</ul>
			<Outlet />
		</Layout>
	);
}
