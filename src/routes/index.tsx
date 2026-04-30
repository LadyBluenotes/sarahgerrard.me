import { createFileRoute } from "@tanstack/solid-router";
import { Layout } from "~/ui/components/layout/Layout";
import { Section } from "~/ui/components/layout/Section";
import { allPosts } from "content-collections";
import { For } from "solid-js";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const DATE = new Date();

  const monthConversion = () => {
    const romanNumerals: { [key: number]: string } = {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX",
      10: "X",
      11: "XI",
      12: "XII",
    };
    return romanNumerals[DATE.getMonth() + 1] || "";
  };

  const mostRecentPost = allPosts.sort((a, b) => {
    const dateA = new Date(a.date as string).getTime();
    const dateB = new Date(b.date as string).getTime();
    return dateB - dateA;
  });

  const nextThreePosts = allPosts
    .sort((a, b) => {
      const dateA = new Date(a.date as string).getTime();
      const dateB = new Date(b.date as string).getTime();
      return dateB - dateA;
    })
    .slice(1, 4);

  return (
    <Layout>
      <Section class="py-8 px-4">
        <div class="flex flex-col gap-4">
          <div class="uppercase font-[var(--mono)] text-sm leading-none tracking-widest">
            — VOL. {monthConversion()} • №{" "}
            {DATE.getFullYear().toString().slice(-2)} •{" "}
            {DATE.toLocaleString("en-US", { month: "long" })}{" "}
            {DATE.getFullYear()} —
          </div>
          <h1 class="flex flex-col text-[8rem] font-[var(--serif)] text-[var(--ink)] leading-none font-[600]">
            Sarah
            <em class="font-italic text-[var(--soft)]">Gerrard</em>
          </h1>
        </div>

        <p class="font-[var(--serif)] font-italic text-[1.5rem] text-[var(--soft)] max-w-md text-balance">
          Developer based in Vancouver, contributing to open source and writing
          about the craft.
        </p>
      </Section>
      <Section class="py-6 gap-4">
        <div class="flex gap-12 items-center">
          <div class="flex flex-col gap-1 text-[var(--soft)]">
            <span>01</span>
            <span class="font-bold capitalize text-[var(--ink)]">
              Most recent post
            </span>
            <span class="font-[var(--mono)] uppercase">
              {new Date(mostRecentPost[0]?.date as string).toLocaleDateString(
                "en-CA",
                {
                  month: "short",
                  day: "numeric",
                },
              )}{" "}
              • {new Date(mostRecentPost[0]?.date as string).getFullYear()}
            </span>
            <span class="font-[var(--mono)] uppercase text-xs">
              {mostRecentPost[0]?.category} • {mostRecentPost[0]?.readTime} min
            </span>
          </div>
          <div class="flex flex-col">
            <h2 class="font-[var(--serif)] font-bold text-[2.5rem] text-[var(--ink)] leading-none font-italic">
              {mostRecentPost[0]?.title}
            </h2>
            <p class="font-[var(--serif)] font-italic text-lg text-[var(--soft)] max-w-lg text-balance">
              {mostRecentPost[0]?.summary}
              <br />
            </p>
            <a
              href={`/posts/${mostRecentPost[0]?._meta.path}`}
              class="font-[var(--mono)] text-[var(--ink)] text-xs underline underline-offset-4 px-1 hover:text-[var(--hover-inactive)] uppercase tracking-widest"
            >
              continue reading →
            </a>
          </div>
        </div>
      </Section>
      <Section class="w-full py-6">
        <div class="grid grid-cols-3 gap-4 w-full">
          <For each={nextThreePosts}>
            {(post) => {
              const date = new Date(post.date as string);
              return (
                <a
                  href={`/posts/${post._meta.path}`}
                  class="flex min-w-0 flex-col items-start gap-2 border-t-2 border-[var(--ink)] py-3"
                >
                  <div class="flex gap-2 font-[var(--mono)] text-xs uppercase tracking-widest text-[var(--soft)]">
                    <span>
                      {date.toLocaleDateString("en-CA", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span>{post.category}</span>
                  </div>
                  <span class="font-[var(--serif)] text-lg font-bold leading-tight text-[var(--ink)]">
                    {post.title}
                  </span>
                  <span class="line-clamp-2 text-sm text-[var(--soft)]">
                    {post.summary}
                  </span>
                </a>
              );
            }}
          </For>
        </div>
      </Section>
    </Layout>
  );
}
