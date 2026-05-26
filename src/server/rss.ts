import { Feed } from "feed";
import { getPublishedPosts } from "~/utils/posts";

export function buildRss(origin: string) {
  const feed = new Feed({
    title: "Sarah Gerrard’s RSS Feed",
    description:
      "Stay updated with the latest posts from Sarah Gerrard (aka LadyBluenotes). Posts on web development, tech, and more.",
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

  for (const post of getPublishedPosts()) {
    const slug = (post as { slug?: string })?.slug ?? post._meta?.path;
    const path = `/posts/${String(slug).replace(/\.mdx?$/, "")}`;
    const url = origin + path;

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.summary,
      date: post.date ? new Date(post.date) : new Date(),
      category: (post.tags ?? []).map((t) => ({ name: t })),
      content:
        (post as { html?: string; content?: string }).html ??
        (post as { content?: string }).content ??
        "",
    });
  }

  return feed;
}
