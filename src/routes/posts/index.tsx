import { createFileRoute } from "@tanstack/solid-router";
import { allPosts } from "content-collections";
import { For } from "solid-js";

export const Route = createFileRoute("/posts/")({
	component: RouteComponent,
});

function RouteComponent() {
	// sort posts by date descending

	// categorize by year
	allPosts.sort((a, b) => {
		const dateA = new Date(a.date as string).getTime();
		const dateB = new Date(b.date as string).getTime();
		return dateB - dateA;
	})

	const postsByYear = allPosts.reduce(
		(acc, post) => {
			const year = new Date(post.date as string).getFullYear();
			if (!acc[year]) {
				acc[year] = [];
			}
			acc[year].push(post);
			return acc;
		},
		{} as Record<number, typeof allPosts>
	)

	// grab all the tags used in posts

	const tagsSet = new Set<string>();
	allPosts.forEach((post) => {
		post.tags?.forEach((tag) => tagsSet.add(tag));
	})
	const tags = Array.from(tagsSet).sort();

	// categorize by tag
	const postsByTag = tags.reduce(
		(acc, tag) => {
			acc[tag] = allPosts.filter((post) => post.tags?.includes(tag));
			return acc;
		},
		{} as Record<string, typeof allPosts>
	)

	return (
		<div>
			<ul class="flex flex-col gap-4">
				<For each={Object.entries(postsByYear).reverse()}>
					{([year, posts]) => (
						<li>
							<h2 class="text-2xl font-bold mb-2">{year}</h2>
							<ul class="flex flex-col gap-2">
								<For each={posts}>
									{(post) => (
										<li>
											<a
												href={`/posts/${post._meta.path}`}
												class="group flex gap-4 items-baseline group-hover:underline"
											>
												<span class="text-[--inactive] group-hover:text-[--hover-inactive] group-hover:underline">
													{post.title}
												</span>

												<span class="text-sm text-[--inactive]/70">
													{new Date(post.date as string).toLocaleDateString(
														"en-CA",
														{
															year: "numeric",
															month: "short",
															day: "numeric",
														}
													)}
												</span>
											</a>
										</li>
									)}
								</For>
							</ul>
						</li>
					)}
				</For>
			</ul>
		</div>
	)
}
