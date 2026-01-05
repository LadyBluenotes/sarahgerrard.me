import { Feed } from "feed";
import { allPosts } from "content-collections";

export function buildRss(origin: string) {
	const feed = new Feed({
		title: "Sarah Gerrard’s RSS Feed",
		description: "Stay updated with the latest posts from Sarah Gerrard (aka LadyBluenotes). Posts on web development, tech, and more.",
		id: origin + "/",
		link: origin + "/",
		language: "en",
		favicon: origin + "/favicon.ico",
		feedLinks: {
			rss2: origin + "/rss.xml",
		},
		updated: new Date(),
		author: {
			name: "Sarah Gerrard",
			email: "hello@sarahgerrard.me",
			link: origin + "/",
		},
	});

	const posts = allPosts
		.filter((p) => !p.draft)
		.sort((a, b) => +new Date(b.date ?? 0) - +new Date(a.date ?? 0));

	for (const post of posts) {
		const slug = (post as any).slug ?? (post as any)._meta?.path;
		const path = `/posts/${String(slug).replace(/\.mdx?$/, "")}`;
		const url = origin + path;

		feed.addItem({
			title: post.title,
			id: url,
			link: url,
			description: post.summary,
			date: post.date ? new Date(post.date) : new Date(),
			category: (post.tags ?? []).map((t) => ({ name: t })),
			// prefer transformed HTML (post.html) when available, fall back to raw content or empty string
			content: (post as any).html ?? (post as any).content ?? "",
		});
	}

	return feed;
}
