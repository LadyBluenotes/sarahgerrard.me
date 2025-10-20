import { createFileRoute, Link } from "@tanstack/solid-router";
import { allBlogs } from "content-collections";
import { For } from "solid-js";

export const Route = createFileRoute("/blog/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<For each={allBlogs}>
				{(blog) => (
					<div>
						<Link to={`/blog/${blog._meta.path}`}>{blog.title}</Link>
					</div>
				)}
			</For>
		</div>
	);
}
