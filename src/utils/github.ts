import { createServerFn } from "@tanstack/solid-start";
import { Octokit } from "octokit";
import { any } from "zod";

const octokit = new Octokit({
	auth: import.meta.env.VITE_GITHUB_TOKEN,
});

export const getContributedRepos = createServerFn({ method: "GET" }).handler(
	async () => {
		const { user } = await octokit.graphql<{ user: any }>(`
			query {
				user(login: "ladybluenotes") {
					repositoriesContributedTo(first: 50, contributionTypes: [COMMIT, PULL_REQUEST, ISSUE]) {
						totalCount
						nodes {
							name
							nameWithOwner
							url
							description
							stargazerCount
						}
					}
				}
			}
		`);

		return {
			count: user.repositoriesContributedTo.totalCount,
			repos: user.repositoriesContributedTo.nodes,
		};
	}
);
