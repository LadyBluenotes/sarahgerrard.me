import { createFileRoute } from "@tanstack/solid-router";
import { Layout } from "~/ui/components/layout/Layout";
import { Section } from "~/ui/components/layout/Section";
import { allPosts } from "content-collections";
import { For, Show } from "solid-js";
import { interests, type InterestType } from "~/data/interests";

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

const INTEREST_ICONS: Record<InterestType, string> = {
  game: "i-tabler-device-gamepad-2",
  movie: "i-tabler-movie",
  show: "i-tabler-device-tv",
  book: "i-tabler-book",
};

const INTEREST_LABELS: Record<InterestType, string> = {
  game: "Game",
  movie: "Movie",
  show: "Show",
  book: "Book",
};

function dayOfYear(date: Date): number {
  const start = Date.UTC(date.getUTCFullYear(), 0, 0);
  const diff =
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) -
    start;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function rotatePool<T>(pool: T[], count: number, seed: number): T[] {
  if (pool.length === 0) return [];
  const picks: T[] = [];
  const take = Math.min(count, pool.length);
  for (let i = 0; i < take; i++) {
    picks.push(pool[(seed + i) % pool.length]);
  }
  return picks;
}

function Home() {
  const now = new Date();
  const issueLine = `— VOL. ${ROMAN_MONTHS[now.getMonth()]} · № ${now
    .getFullYear()
    .toString()
    .slice(-2)} · ${now
    .toLocaleString("en-US", { month: "long" })
    .toUpperCase()} ${now.getFullYear()} —`;

  const lead = sortedPosts[0];
  const currentYear = now.getUTCFullYear();
  const archivePool = sortedPosts.slice(1).filter((post) => {
    const postYear = new Date(post.date as string).getUTCFullYear();
    return postYear < currentYear;
  });
  const seed = dayOfYear(now);
  const archivePicks = rotatePool(archivePool, 3, seed);
  const interestPicks = rotatePool(interests, 3, seed);

  const formatDate = (value: string) =>
    new Date(value)
      .toLocaleDateString("en-US", { month: "short", day: "numeric" })
      .toUpperCase();

  const formatArchiveDate = (value: string) => {
    const d = new Date(value);
    const md = d
      .toLocaleDateString("en-US", { month: "short", day: "numeric" })
      .toUpperCase();
    return `${md}, ${d.getUTCFullYear()}`;
  };

  const formatCategory = (value?: string) => (value ? value.toUpperCase() : "");

  return (
    <Layout>
      <Section class="py-6">
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

      <Section class="py-10">
        <div class="grid w-full gap-8 md:grid-cols-[160px_1fr] mb-10">
          <div class="font-[var(--mono)] text-[0.7rem] uppercase leading-[1.8] tracking-[0.25em] text-[var(--softer)]">
            <div>01</div>
            <div class="mt-1 block font-[var(--sans-serif)] text-[0.78rem] tracking-normal uppercase text-[var(--ink)]">
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
          <div class="flex flex-col gap-4">
            <h2 class="font-[var(--serif)] text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.05] tracking-tight text-[var(--ink)]">
              {lead.title}
            </h2>
            <div class="flex flex-col gap-4 max-w-[58ch]">
              <For each={lead.lede ?? []}>
                {(paragraph) => (
                  <p class="my-0 font-[var(--sans-serif)] text-[0.95rem] leading-[1.6] text-[var(--soft)]">
                    {paragraph}
                  </p>
                )}
              </For>
            </div>
            <a
              href={`/posts/${lead._meta.path}`}
              class="mt-2 inline-block border-b border-[var(--ink)] pb-[2px] font-[var(--mono)] text-[0.7rem] uppercase tracking-[0.2em] text-[var(--ink)] hover:text-[var(--soft)] hover:border-[var(--soft)] transition-colors w-fit"
            >
              Continue reading →
            </a>
          </div>
        </div>
        <div class="grid w-full gap-x-12 gap-y-10 md:grid-cols-2">
          <div>
            <div class="mb-4 font-[var(--mono)] text-[0.7rem] uppercase leading-none tracking-[0.3em] text-[var(--softer)]">
              02 · From the archive
            </div>
            <ul class="flex flex-col">
              <For
                each={archivePicks}
                fallback={
                  <li class="border-t border-[var(--rule)] py-3 font-[var(--sans-serif)] text-[0.875rem] leading-snug text-[var(--soft)]">
                    Nothing in the archive yet — check back once {currentYear}{" "}
                    wraps up.
                  </li>
                }
              >
                {(post) => {
                  const dateString = post.date as string;
                  return (
                    <li class="border-t border-[var(--rule)]">
                      <a
                        href={`/posts/${post._meta.path}`}
                        class="group flex flex-col gap-1 py-3"
                      >
                        <div class="flex gap-2 font-[var(--mono)] text-[0.65rem] uppercase tracking-[0.2em] text-[var(--softer)]">
                          <span>{formatArchiveDate(dateString)}</span>
                          <span>·</span>
                          <span>
                            {formatCategory(
                              post.category as string | undefined,
                            )}
                          </span>
                        </div>
                        <span class="font-[var(--serif)] text-[1.4rem] leading-tight text-[var(--ink)] group-hover:text-[var(--soft)] transition-colors">
                          {post.title}
                        </span>
                        <span class="line-clamp-2 font-[var(--sans-serif)] text-[0.875rem] leading-snug text-[var(--soft)]">
                          {post.summary}
                        </span>
                      </a>
                    </li>
                  );
                }}
              </For>
            </ul>
            <a
              href="/posts"
              class="mt-3 inline-flex items-center gap-1 font-[var(--mono)] text-[0.65rem] uppercase tracking-[0.2em] text-[var(--soft)] hover:text-[var(--ink)] transition-colors"
            >
              → Full archive · {allPosts.length} essays
            </a>
          </div>

          <div>
            <div class="mb-4 font-[var(--mono)] text-[0.7rem] uppercase leading-none tracking-[0.3em] text-[var(--softer)]">
              03 · Interests
            </div>
            <ul class="flex flex-col">
              <For each={interestPicks}>
                {(item) => {
                  const titleClass =
                    "font-[var(--serif)] text-[1.4rem] leading-tight text-[var(--ink)] transition-colors";
                  const body = (titleHover: string) => (
                    <div class="flex flex-col gap-1 py-3">
                      <div class="flex items-center gap-2 font-[var(--mono)] text-[0.65rem] uppercase tracking-[0.2em] text-[var(--softer)]">
                        <span
                          class={`${INTEREST_ICONS[item.type]} text-[0.85rem]`}
                          aria-hidden="true"
                        />
                        <span>{INTEREST_LABELS[item.type]}</span>
                      </div>
                      <span class={`${titleClass} ${titleHover}`}>
                        {item.title}
                      </span>
                      <span class="font-[var(--sans-serif)] text-[0.875rem] leading-snug text-[var(--soft)]">
                        {item.creator}
                      </span>
                    </div>
                  );
                  return (
                    <li class="border-t border-[var(--rule)]">
                      <Show when={item.link} fallback={body("")}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="group block"
                        >
                          {body("group-hover:text-[var(--soft)]")}
                        </a>
                      </Show>
                    </li>
                  );
                }}
              </For>
            </ul>
            <div class="mt-3 font-[var(--mono)] text-[0.65rem] uppercase tracking-[0.2em] text-[var(--softer)]">
              — Rotates daily
            </div>
          </div>
        </div>
      </Section>

      <Section class="py-10">
        <div class="mb-6 font-[var(--mono)] text-[0.7rem] uppercase leading-none tracking-[0.3em] text-[var(--softer)]">
          04 · Elsewhere on this site
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
