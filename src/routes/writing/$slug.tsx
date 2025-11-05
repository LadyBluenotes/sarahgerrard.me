import { createFileRoute, Link } from "@tanstack/solid-router";
import { allPosts } from "content-collections";
import { seo } from "~/utils/seo";

export const Route = createFileRoute("/writing/$slug")({
	beforeLoad: () => ({
		allPosts,
	}),
	loader: async ({ params, context: { allPosts } }) => {
		const slug = params.slug;
		const post = allPosts.find((post) => post._meta.path === slug);
		if (!post) {
			throw new Response("Not Found", { status: 404 });
		}
		return {
			title: post.title,
			summary: post.summary,
			html: post.html,
			next: post.next,
			prev: post.prev,
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
				to="/writing"
				class="inline-flex items-center gap-1"
			>
				<div class="i-tabler-chevron-left w-1em h-1em" />
				See all posts
			</Link>
			<article
				class="my-4"
				innerHTML={post().html}
			/>
		</div>
	);
}
