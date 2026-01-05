import { createFileRoute } from '@tanstack/solid-router'
import { buildRss } from "~/server/rss";
import { Show } from "solid-js";

export const Route = createFileRoute('/rss.xml')({
	server: {
		handlers: {
			GET: async ({ request }) => {
				const url = new URL(request.url);
				const origin = url.origin;

				// Determine whether the client clearly wants XML (feed clients)
				const accept = (request.headers.get('accept') || '').toLowerCase();
				const xmlTypes = ['application/rss+xml', 'application/atom+xml', 'application/xml', 'text/xml'];
				const explicitXml = xmlTypes.some((t) => accept.includes(t));

				// Heuristic: if this looks like a browser (User-Agent) prefer HTML preview
				const ua = (request.headers.get('user-agent') || '').toLowerCase();
				const browserLike = /mozilla|applewebkit|chrome|safari|firefox|edge|trident|opera/.test(ua);

				// If the request explicitly wants HTML, or it's a browser and didn't explicitly ask for XML, show HTML preview
				const wantsHtml = accept.includes('text/html') || (browserLike && !explicitXml);

				try {
					const feed = buildRss(origin);
					const xml = feed.rss2();

					if (wantsHtml) {
						// Generate a styled HTML preview for browsers
						const feedObj = feed.options;
						const items = (feed as any).items || [];

						const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${feedObj.title || "RSS Feed"}</title>
  <style>
    :root {
      --background-color: #f2f0ef;
      --border-color: #c8c8c8;
      --inactive: #555555;
      --hover-inactive: #1a2421;
      --text-color: #232b2b;
      --heading-color: #111111;
      --underline-color: #888888;
      --button-bg: #d9d9d9;
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --background-color: #050505;
        --border-color: #212121;
        --inactive: #b8b8b8;
        --hover-inactive: #e1e1dd;
        --text-color: #b6b6b6;
        --heading-color: #e6e6e6;
        --underline-color: #a7a7a7;
        --button-bg: #2b2b2b;
      }
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: "Open Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.5;
      color: var(--text-color);
      background: var(--background-color);
      padding: 1.5rem;
      -webkit-font-smoothing: antialiased;
    }
    .container {
      max-width: 48rem;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    h1 {
      color: var(--heading-color);
      font-weight: 600;
      font-size: 2.25rem;
      line-height: 1.11;
    }
    .description {
      color: var(--text-color);
      padding-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .item {
    	background: var(--background-color)/10;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1rem 0;
    }
    .item:last-child {
      border-bottom: none;
    }
    .item-title {
      color: var(--heading-color);
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 1.33;
    }
    .item-title a {
      color: var(--heading-color);
      font-weight: 600;
      text-decoration: none;
      box-shadow: var(--underline-color) 0 -0.5px 0 0 inset;
      transition: box-shadow 0.2s ease-in-out;
    }
    .item-title a:hover {
      box-shadow: var(--heading-color) 0 -1px 0 0 inset;
    }
    .item-header {
    	display: flex;
    	justify-content: space-between;
    }
    .item-meta {
      color: var(--inactive);
      font-size: 0.875rem;
    }
    .item-description {
      color: var(--text-color);
      line-height: 1.5;
      margin: 0.5rem 0;
      padding: 0 1rem;
    }
    .categories {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    .category {
      display: inline-block;
      background-color: var(--button-bg);
      color: var(--text-color);
      border-radius: 0.375rem;
      font-size: 0.75rem;
      border: 1px solid var(--border-color);
    }
    .subheading {
    	font-size: 1.5rem;
    	color: var(--inactive);
    	font-weight: 600;
    }
    .link {
    	color: var(--inactive);
    	transition: color 0.2s ease-in-out;
    	border: 1px solid var(--border-color);
    	width: fit-content;
    	text-decoration: none;
    	padding: 0.25rem 0.5rem;
    	border-radius: 0.375rem;
    	margin-top: 1rem;
    }
    .link:hover {
    	background-color: var(--button-bg);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>${feedObj.title || "RSS Feed"}</h1>
    <div class="description">
    	<p>${feedObj.description || ""}</p>
			<p>Subscribe using any feed reader to stay updated with the latest posts.</p>
				<a 
					href="/"
					class="link"
				>
					&larr; Back to Site
			</a>
		</div>
    
    
    <h2 class="subheading">Recent Posts</h2>
    <div class="items">
      ${items
				.map(
					(item: any) => `
        <article class="item">
        <div class="item-header">
        	<h2 class="item-title">
            <a href="${item.link}">${item.title}</a>
          </h2>
          <span class="item-meta">
            ${item.date ? new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : ""}
          </span>
				</div>
          
          ${item.description ? `<div class="item-description">${item.description}</div>` : ""}
          ${
						item.category && item.category.length > 0
							? `
            <div class="categories">
              ${item.category.map((cat: any) => `<span class="category">${cat.name || cat}</span>`).join("")}
            </div>
          `
							: ""
					}
        </article>
      `
				)
				.join("")}
    </div>
  </div>
</body>
</html>`;

						return new Response(html, {
							headers: { 'Content-Type': 'text/html; charset=utf-8' },
						});
					}

					return new Response(xml, {
						headers: {
							'Content-Type': 'application/rss+xml; charset=utf-8',
							'Cache-Control': 'public, max-age=0, s-maxage=3600',
						},
					});
				} catch (err: any) {
					console.error('Failed to build RSS feed', err);
					return new Response('Internal Server Error', { status: 500 });
				}
			},
		},
	},
});
