import { createFileRoute } from "@tanstack/solid-router";
import { Layout } from "~/ui/components/layout/Layout";
import { Section } from "~/ui/components/layout/Section";
import { allPosts } from "content-collections";
import { For } from "solid-js";

export const Route = createFileRoute("/")({
  component: Home,
});

const ROMAN_MONTHS = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
];

const LATELY = "home server, type-safe routing, sourdough that finally rises.";

const linkCards = [
  {
    href: "/posts",
    label: "Posts",
    meta: () => `${allPosts.length} essays`,
    description: "Notes on the craft, the tools, and the slow parts.",
  },
  {
    href: "https://github.com/ladybluenotes",
    label: "Open source",
    meta: () => "→ GitHub",
    description: "What I build and contribute to in the open.",
    external: true,
  },
  {
    href: "/about",
    label: "About",
    meta: () => "Who I am",
    description: "A bit about me, how I work, and how to reach me.",
  },
];

const sortedPosts = [...allPosts].sort((a, b) => {
  const dateA = new Date(a.date as string).getTime();
  const dateB = new Date(b.date as string).getTime();
  return dateB - dateA;
});

function Home() {
  const now = new Date();
  const issueLine = `— VOL. ${ROMAN_MONTHS[now.getMonth()]} · № ${now
    .getFullYear()
    .toString()
    .slice(-2)} · ${now
    .toLocaleString("en-US", { month: "long" })
    .toUpperCase()} ${now.getFullYear()} —`;

  const lead = sortedPosts[0];
  const latestThree = sortedPosts.slice(1, 4);

  const formatDate = (value: string) =>
    new Date(value)
      .toLocaleDateString("en-US", { month: "short", day: "numeric" })
      .toUpperCase();

  const formatCategory = (value?: string) => (value ? value.toUpperCase() : "");

  return (
    <Layout>
      <Section class="py-10">
        <div class="flex flex-col gap-6">
          <div class="font-[var(--mono)] text-[0.7rem] uppercase leading-none tracking-[0.3em] text-[var(--softer)]">
            {issueLine}
          </div>
          <h1 class="font-[var(--serif)] text-[clamp(4rem,12vw,8.5rem)] font-[400] leading-[0.9] tracking-[-0.04em] text-[var(--ink)]">
            Sarah
            <br />
            <em class="font-italic text-[var(--soft)]">Gerrard.</em>
          </h1>
          <p class="font-[var(--serif)] font-italic text-[1.4rem] leading-snug text-[var(--soft)] max-w-md text-balance">
            Developer based in Vancouver, contributing to open source and
            writing about the craft.
          </p>
          <p class="mt-2 font-[var(--mono)] text-[0.7rem] uppercase leading-[1.6] tracking-[0.2em] text-[var(--softer)]">
            — Lately ·{" "}
            <span class="normal-case tracking-normal font-[var(--sans-serif)] text-[0.78rem] text-[var(--soft)]">
              {LATELY}
            </span>
          </p>
        </div>
      </Section>

      {lead && (
        <Section class="py-10">
          <div class="grid w-full gap-8 md:grid-cols-[160px_1fr]">
            <div class="font-[var(--mono)] text-[0.7rem] uppercase leading-[1.8] tracking-[0.25em] text-[var(--softer)]">
              <div>01</div>
              <div class="mt-1 block font-[var(--sans-serif)] text-[0.78rem] tracking-normal normal-case text-[var(--ink)]">
                Most recent
              </div>
              <div class="mt-2">
                {formatDate(lead.date as string)} ·{" "}
                {new Date(lead.date as string).getFullYear()}
              </div>
              <div>
                {formatCategory(lead.category as string | undefined)} ·{" "}
                {lead.readTime} MIN
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <h2 class="font-[var(--serif)] text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.05] tracking-tight text-[var(--ink)]">
                {lead.title}
              </h2>
              <p class="font-[var(--sans-serif)] text-[0.95rem] leading-snug text-[var(--soft)] max-w-xl text-balance">
                {lead.summary}
              </p>
              <a
                href={`/posts/${lead._meta.path}`}
                class="mt-2 inline-block border-b border-[var(--ink)] pb-[2px] font-[var(--mono)] text-[0.7rem] uppercase tracking-[0.2em] text-[var(--ink)] hover:text-[var(--soft)] hover:border-[var(--soft)] transition-colors w-fit"
              >
                Continue reading →
              </a>
            </div>
          </div>
        </Section>
      )}

      <Section class="py-10">
        <div class="mb-6 font-[var(--mono)] text-[0.7rem] uppercase leading-none tracking-[0.3em] text-[var(--softer)]">
          02 · Elsewhere on this site
        </div>
        <div class="grid w-full gap-6 md:grid-cols-3">
          <For each={linkCards}>
            {(card) => (
              <a
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                class="group flex min-w-0 flex-col gap-2 py-1"
              >
                <div class="font-[var(--mono)] text-[0.65rem] uppercase tracking-[0.2em] text-[var(--softer)]">
                  {card.meta()}
                </div>
                <span class="font-[var(--serif)] text-[1.4rem] leading-tight text-[var(--ink)] group-hover:text-[var(--soft)] transition-colors">
                  {card.label}
                </span>
                <span class="font-[var(--sans-serif)] text-[0.875rem] leading-snug text-[var(--soft)]">
                  {card.description}
                </span>
              </a>
            )}
          </For>
        </div>
      </Section>

      <Section class="py-10">
        <div class="mb-6 font-[var(--mono)] text-[0.7rem] uppercase leading-none tracking-[0.3em] text-[var(--softer)]">
          03 · Recent writing
        </div>
        <div class="grid w-full gap-x-6 gap-y-3 md:grid-cols-3 md:[grid-template-rows:auto_auto_auto_auto]">
          <For each={latestThree}>
            {(post) => {
              const dateString = post.date as string;
              return (
                <a
                  href={`/posts/${post._meta.path}`}
                  class="group flex min-w-0 flex-col gap-3 py-1 md:grid md:gap-3 md:[grid-template-rows:subgrid] md:row-span-4"
                >
                  <hr class="w-full self-start border-0 border-t border-[var(--rule)] m-0" />
                  <div class="flex gap-2 self-start font-[var(--mono)] text-[0.65rem] uppercase tracking-[0.2em] text-[var(--softer)]">
                    <span>{formatDate(dateString)}</span>
                    <span>·</span>
                    <span>
                      {formatCategory(post.category as string | undefined)}
                    </span>
                  </div>
                  <span class="self-start font-[var(--serif)] text-[1.4rem] leading-tight text-[var(--ink)] group-hover:text-[var(--soft)] transition-colors">
                    {post.title}
                  </span>
                  <span class="self-start line-clamp-2 font-[var(--sans-serif)] text-[0.875rem] leading-snug text-[var(--soft)]">
                    {post.summary}
                  </span>
                </a>
              );
            }}
          </For>
        </div>
      </Section>

      <Section class="py-6 border-b-0">
        <p class="w-full text-center font-[var(--mono)] text-[0.65rem] uppercase leading-[1.8] tracking-[0.2em] text-[var(--softer)]">
          — Built with Solid + TanStack Start ·{" "}
          <a
            href="https://github.com/LadyBluenotes/sarahgerrard.me"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-[var(--ink)] transition-colors"
          >
            Source on GitHub
          </a>{" "}
          —
        </p>
      </Section>
    </Layout>
  );
}
