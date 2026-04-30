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

		if (doc.draft) {
			return skip("Draft post");
		}
		return {
			...doc,
			words,
			readTime,
			html,
			next: next || null,
			prev: prev || null,
		};
	},
});

export default defineConfig({
	collections: [posts],
});
