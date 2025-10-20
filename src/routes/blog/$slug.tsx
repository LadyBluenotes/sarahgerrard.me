import { createFileRoute, Link } from "@tanstack/solid-router";
import { allBlogs } from "content-collections";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/blog/$slug")({
	beforeLoad: () => ({
		allBlogs,
	}),
	loader: async ({ params, context: { allBlogs } }) => {
		const slug = params.slug;
		const post = allBlogs.find((post) => post._meta.path === slug);
		if (!post) {
			throw new Response("Not Found", { status: 404 });
		}
		return {
			title: post.title,
			summary: post.summary,
			html: post.html,
		};
	},
	head: (post) => ({
		meta: post.loaderData
			? [
					...seo({
						title: `${post.loaderData?.title} - Sarah Gerrard`,
						description: post.loaderData?.summary || "",
					}),
				]
			: [],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	const post = Route.useLoaderData();
	return (
		<div>
			<Link
				to="/blog"
				class="inline-flex items-center gap-1"
			>
				<div class="i-tabler-chevron-left w-1em h-1em" />
				See all posts
			</Link>
			<article
				class="my-4"
				innerHTML={post().html}
			></article>
		</div>
	);
}
