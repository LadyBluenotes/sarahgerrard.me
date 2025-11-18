import { createFileRoute } from "@tanstack/solid-router";
import { For, Index, Show } from "solid-js";
import { getContributedRepos } from "~/utils/github";

export const Route = createFileRoute("/oss/")({
	loader: async () => {
		const repo = await getContributedRepos();
		if (!repo) {
			throw new Error("Failed to load GitHub repos");
		}
		return repo;
	},
	component: RouteComponent,
});

function RouteComponent() {
	const data = Route.useLoaderData();
	return (
		<div>
			<ul>
				<For each={data().repos}>
					{(info) => (
						<Show when={info}>
							<li class="flex flex-col mb-4 border-1 border-white">
								<div class="flex justify-between">
									<span>{info?.nameWithOwner}</span>
									<span>⭐{info?.stargazerCount}</span>
								</div>
								<p>{info?.description}</p>
								<a
									href={info?.url}
									target="_blank"
									rel="noreferrer"
								>
									Visit Repo
								</a>
							</li>
						</Show>
					)}
				</For>
			</ul>
		</div>
	);
}
