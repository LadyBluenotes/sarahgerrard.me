import { createFileRoute, Link, Outlet } from "@tanstack/solid-router";
import { Layout } from "~/ui/components/layout/Layout";

export const Route = createFileRoute("/blog")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Layout>
			<ul class="flex items-center gap-4 mb-4">
				<li>
					<Link to="/blog">Blog Posts</Link>
				</li>
				<li>
					<Link to="/blog/thoughts">Thoughts</Link>
				</li>
			</ul>
			<hr class="my-4 border-[var(--border-color)]" />
			<Outlet />
		</Layout>
	);
}
