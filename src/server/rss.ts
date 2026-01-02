import { Feed } from "feed";
import { allPosts } from "content-collections";

export function buildRss(origin: string) {
	const feed = new Feed({
		title: "Sarah Gerrard’s Posts",
		description: "Posts on dev, docs, and learning in public.",
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
		const path = `/blog/${String(slug).replace(/\.mdx?$/, "")}`;
		const url = origin + path;

		feed.addItem({
			title: post.title,
			id: url,
			link: url,
			description: post.summary,
			date: post.date ? new Date(post.date) : new Date(),
			category: (post.tags ?? []).map((t) => ({ name: t })),
			content: post.content
		});
	}

	return feed;
}
