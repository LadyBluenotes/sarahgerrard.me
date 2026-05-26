import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";
import { createHtml } from "~/utils/createHtml";

const postSchema = z.object({
  title: z.string(),
  summary: z.string(),
  date: z.string().optional(),
  category: z.enum([
    "personal",
    "technical",
    "tools",
    "open-source",
    "infrastructure",
  ]),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional(),
});

function stripInlineMarkdown(text: string): string {
  return text
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function extractLede(markdown: string, count = 2): string[] {
  const withoutCode = markdown
    .replace(/^---[\s\S]*?\n---\s*/m, "")
    .replace(/```[\s\S]*?```/g, "");
  const blocks = withoutCode
    .split(/\n\s*\n+/)
    .map((b) => b.trim())
    .filter(Boolean);
  const paragraphs = blocks.filter((b) => {
    if (/^[#>!|]/.test(b)) return false;
    if (/^(\s*[-*+]\s)/.test(b)) return false;
    if (/^\d+\.\s/.test(b)) return false;
    if (/^<[a-z]/i.test(b)) return false;
    return true;
  });
  return paragraphs.slice(0, count).map(stripInlineMarkdown).filter(Boolean);
}

const posts = defineCollection({
  name: "posts",
  directory: "content",
  include: ["**/*.md"],
  schema: postSchema,
  transform: async (doc, { skip, collection, cache }) => {
    const html = await cache(doc.content, async (content) => {
      return await createHtml(content);
    });
    const docs = await collection.documents();
    const prev = docs.find((d) => d._meta.path === doc._meta.prev);
    const next = docs.find((d) => d._meta.path === doc._meta.next);
    const words = html.split(" ").length;
    const readTime = Math.ceil(words / 200);
    const lede = extractLede(doc.content, 2);

    if (doc.draft) {
      return skip("Draft post");
    }
    return {
      ...doc,
      words,
      readTime,
      html,
      lede,
      next: next || null,
      prev: prev || null,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
