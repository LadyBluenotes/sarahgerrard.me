// <reference types="vite/client" />
import { createRootRoute, HeadContent, Scripts } from "@tanstack/solid-router";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";
import { HydrationScript } from "solid-js/web";
import type * as Solid from "solid-js";
import { DefaultCatchBoundary } from "~/ui/components/errors/DefaultCatchBoundary";
import { NotFound } from "~/ui/components/errors/NotFound";
import { seo } from "~/utils/seo";

import "virtual:uno.css";
import "@unocss/reset/tailwind-compat.css";

import "../ui/styles/index.css";
import Header from "~/ui/components/layout/Header";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      ...seo({
        title: "Sarah Gerrard",
        description:
          "The personal website of Sarah Gerrard - software developer, tech enthusiast, and lifelong learner. Explore my projects, blog posts, and more.",
      }),
    ],
    links: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
      { rel: "icon", href: "/favicon.ico" },
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: "Sarah Gerrard's RSS Feed",
        href: "/rss.xml",
      },
    ],
    scripts: [
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-FD4EDGWJ5V",
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-FD4EDGWJ5V');`,
      },
      { src: "/theme-init.js" },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
});

function RootDocument(props: { children: Solid.JSX.Element }) {
  return (
    <html lang="en">
      <head>
        <HydrationScript />
      </head>
      <body>
        <HeadContent />
        <Header />
        {props.children}
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}
