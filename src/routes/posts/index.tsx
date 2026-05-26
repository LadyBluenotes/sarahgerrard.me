import { createFileRoute } from "@tanstack/solid-router";
import { For } from "solid-js";
import { getSortedPosts } from "~/utils/posts";

export const Route = createFileRoute("/posts/")({
  component: RouteComponent,
});

function RouteComponent() {
  const posts = getSortedPosts();
  const postsByYear = posts.reduce<Record<number, typeof posts>>(
    (acc, post) => {
      const year = new Date(post.date as string).getFullYear();
      (acc[year] ??= []).push(post);
      return acc;
    },
    {},
  );

  return (
    <div>
      <ul class="flex flex-col gap-4">
        <For each={Object.entries(postsByYear).reverse()}>
          {([year, yearPosts]) => (
            <li>
              <h2 class="text-2xl font-bold mb-2">{year}</h2>
              <ul class="flex flex-col gap-2">
                <For each={yearPosts}>
                  {(post) => (
                    <li>
                      <a
                        href={`/posts/${post._meta.path}`}
                        class="group flex gap-4 items-baseline group-hover:underline"
                      >
                        <span class="text-[var(--inactive)] group-hover:text-[var(--hover-inactive)] group-hover:underline">
                          {post.title}
                        </span>

                        <span class="text-sm text-[var(--inactive-muted)]">
                          {new Date(post.date as string).toLocaleDateString(
                            "en-CA",
                            { year: "numeric", month: "short", day: "numeric" },
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
  );
}
