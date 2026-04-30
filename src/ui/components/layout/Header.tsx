import { ThemeSelector } from "./ThemeSelector";
import { Index, Show } from "solid-js";
import { Link } from "@tanstack/solid-router";
import { Divider } from "~/ui/components/layout/Divider";

export const socialLinks = [
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
    href: "/rss.xml",
    label: "RSS Feed",
    iconClass: "i-tabler-rss",
  },
];

export default function Header() {
  const siteLinks = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/posts",
      label: "Posts",
    },
    {
      to: "/oss",
      label: "Open Source",
    },
    {
      to: "/about",
      label: "About",
    },
  ];

  return (
    <div class="sticky top-0 z-50 px-6 bg-[var(--background-color)]">
      <header class="mx-auto flex justify-between py-4 font-[var(--mono)]">
        <a href="/" class="text-[0.9rem] leading-none my-auto tracking-widest">
          <span>SARAH GERRARD</span>
        </a>
        <div class="flex items-center gap-2 text-sm font-medium tracking-widest">
          <Index each={siteLinks}>
            {(link, index) => (
              <>
                <Link
                  to={link()?.to}
                  class="text-[var(--soft)] hover:text-[var(--hover-inactive)] text-xs uppercase"
                  activeProps={{
                    class: "text-[var(--ink)] underline",
                  }}
                >
                  {link()?.label}
                </Link>
                <div class="text-[var(--soft)]">
                  <Show when={index !== siteLinks.length - 1}>•</Show>
                </div>
              </>
            )}
          </Index>
          <ThemeSelector />
        </div>
      </header>
      <Divider />
    </div>
  );
}
