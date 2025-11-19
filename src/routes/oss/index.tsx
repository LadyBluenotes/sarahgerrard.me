import { createFileRoute } from "@tanstack/solid-router";
import { For, Show } from "solid-js";
import { getContributedRepos } from "~/utils/github";
import { OpenSourceCard } from "~/ui/components/OpenSourceCard";

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
		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-4">
				I'm currently a maintainer in the following open source projects:
				<ul class="flex flex-wrap gap-4 justify-center">
					<li class="md:w-340px">
						<div class="flex flex-col outline-1 outline-[--button-bg] p-4 rounded-lg gap-2">
							<span class="font-semibold text-lg mt-0">SolidJS</span>
							<p class="my-0">
								A simple and performant JavaScript library for building user
								interfaces.
							</p>
							<a
								href="https://github.com/solidjs"
								target="_blank"
								rel="noopener noreferrer"
								class="link w-fit text-sm ml-auto"
							>
								View on GitHub
							</a>
						</div>
					</li>
					<li class="md:w-340px">
						<div class="flex flex-col outline-1 outline-[--button-bg] p-4 rounded-lg gap-2">
							<span class="font-semibold text-lg">TanStack</span>
							<p class="text-[--inactive] m-0">
								A collection of open source software for web developers.
							</p>
							<a
								href="https://github.com/tanstack"
								target="_blank"
								rel="noopener noreferrer"
								class="link w-fit text-sm ml-auto"
							>
								View on GitHub
							</a>
						</div>
					</li>
				</ul>
			</div>
			<p>
				I've contributed to several open source projects. Here are some of the
				repositories I've worked on:
			</p>
			<ul class="flex flex-wrap gap-4 justify-center">
				<For each={data().repos}>
					{(info) => (
						<Show when={info}>
							<li class="md:w-340px">
								<OpenSourceCard
									repo={info?.nameWithOwner}
									stars={info?.stargazerCount}
									description={info?.description}
									url={info?.url}
								/>
							</li>
						</Show>
					)}
				</For>
			</ul>
		</div>
	);
}
