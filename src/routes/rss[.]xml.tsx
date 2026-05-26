import { createFileRoute } from "@tanstack/solid-router";
import { buildRss } from "~/server/rss";
import { renderRssHtml } from "~/server/rssHtml";

const XML_TYPES = [
  "application/rss+xml",
  "application/atom+xml",
  "application/xml",
  "text/xml",
];

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const accept = (request.headers.get("accept") || "").toLowerCase();
        const ua = (request.headers.get("user-agent") || "").toLowerCase();
        const explicitXml = XML_TYPES.some((t) => accept.includes(t));
        const browserLike =
          /mozilla|applewebkit|chrome|safari|firefox|edge|trident|opera/.test(
            ua,
          );
        const wantsHtml =
          accept.includes("text/html") || (browserLike && !explicitXml);

        try {
          const feed = buildRss(origin);

          if (wantsHtml) {
            return new Response(renderRssHtml(feed), {
              headers: { "Content-Type": "text/html; charset=utf-8" },
            });
          }

          return new Response(feed.rss2(), {
            headers: {
              "Content-Type": "application/rss+xml; charset=utf-8",
              "Cache-Control": "public, max-age=0, s-maxage=3600",
            },
          });
        } catch (err) {
          console.error("Failed to build RSS feed", err);
          return new Response("Internal Server Error", { status: 500 });
        }
      },
    },
  },
});
