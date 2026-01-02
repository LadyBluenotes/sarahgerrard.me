import { createFileRoute } from "@tanstack/solid-router";
import { buildRss } from "~/server/rss";

export const Route = createFileRoute("/rss.xml")({
	server: {
		handlers: {
			GET: async ({ request }) => {
				const { origin } = new URL(request.url);

				const feed = buildRss(origin);
				const xml = feed.rss2(); // RSS 2.0 output :contentReference[oaicite:3]{index=3}

				return new Response(xml, {
					headers: {
						"Content-Type": "application/rss+xml; charset=utf-8",
						"Cache-Control": "public, max-age=0, s-maxage=3600",
					},
				});
			},
		},
	},
});