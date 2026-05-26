import { ThemeSelector } from "./ThemeSelector";
import { Index, Show } from "solid-js";
import { Link } from "@tanstack/solid-router";

const siteLinks = [
  { to: "/", label: "Home" },
  { to: "/posts", label: "Posts" },
  { to: "/oss", label: "Open Source" },
  { to: "/about", label: "About" },
];

const socialLinks = [
  {
    href: "https://github.com/ladybluenotes",
    label: "GitHub",
    iconClass: "i-tabler-brand-github",
  },
  {
    href: "https://bsky.app/profile/ladybluenotes.dev",
    label: "Bluesky",
    iconClass: "i-tabler-brand-bluesky",
  },
  {
    href: "https://www.linkedin.com/in/sarahgerrard",
    label: "LinkedIn",
    iconClass: "i-tabler-brand-linkedin",
  },
  {
    href: "/rss.xml",
    label: "RSS Feed",
    iconClass: "i-tabler-rss",
  },
];

export default function Header() {
  return (
    <div class="sticky top-0 z-50 bg-[var(--background-color)] border-b border-[var(--rule)]">
      <header class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 font-[var(--mono)]">
        <Link
          to="/"
          class="text-[0.78rem] font-medium leading-none tracking-[0.18em] text-[var(--ink)] uppercase"
        >
          Sarah Gerrard
        </Link>

        <div class="flex items-center gap-4">
          <nav class="flex items-center gap-4 text-[0.7rem] tracking-[0.18em] uppercase">
            <Index each={siteLinks}>
              {(link) => (
                <Link
                  to={link().to}
                  class="text-[var(--soft)] transition-colors hover:text-[var(--ink)]"
                  activeProps={{
                    class:
                      "text-[var(--ink)] border-b border-[var(--ink)] pb-[2px]",
                  }}
                  activeOptions={{ exact: link().to === "/" }}
                >
                  {link().label}
                </Link>
              )}
            </Index>
          </nav>

          <span aria-hidden="true" class="h-[14px] w-px bg-[var(--rule)]" />

          <div class="flex items-center gap-3 text-[var(--soft)]">
            <Index each={socialLinks}>
              {(link) => {
                const isInternal = link().href.startsWith("/");
                return (
                  <Show
                    when={isInternal}
                    fallback={
                      <a
                        href={link().href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link().label}
                        title={link().label}
                        class="flex items-center transition-colors hover:text-[var(--ink)]"
                      >
                        <div class={`${link().iconClass} w-3.5 h-3.5`} />
                      </a>
                    }
                  >
                    <a
                      href={link().href}
                      aria-label={link().label}
                      title={link().label}
                      class="flex items-center transition-colors hover:text-[var(--ink)]"
                    >
                      <div class={`${link().iconClass} w-3.5 h-3.5`} />
                    </a>
                  </Show>
                );
              }}
            </Index>
            <ThemeSelector />
          </div>
        </div>
      </header>
    </div>
  );
}
