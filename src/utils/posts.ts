import { allPosts, type Post } from "content-collections";

export function getSortedPosts(): Post[] {
  return [...allPosts].sort(
    (a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime(),
  );
}

export function getPublishedPosts(): Post[] {
  const now = new Date();
  return getSortedPosts().filter(
    (post) => !post.draft && post.date && new Date(post.date) <= now,
  );
}
