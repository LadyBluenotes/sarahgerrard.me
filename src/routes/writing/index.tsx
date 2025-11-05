import { createFileRoute } from "@tanstack/solid-router";
import { allPosts } from "content-collections";
import { For } from "solid-js";

export const Route = createFileRoute("/writing/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<ul class="flex flex-col gap-4">
				<For each={allPosts}>
					{(post) => (
						<li>
							<a
								href={`/writing/${post._meta.path}`}
								class="group flex gap-2 content-bottom group-hover:underline"
							>
								<span class="text-[--inactive] group-hover:text-[--hover-inactive] group-hover:underline">
									{post.title}
								</span>
								-
								<span class="text-sm mt-auto text-[--inactive]/70">
									{new Date(post.date as string).toLocaleDateString("en-CA", {
										year: "numeric",
										month: "short",
										day: "numeric",
									})}
								</span>
							</a>
						</li>
					)}
				</For>
			</ul>
		</div>
	);
}
