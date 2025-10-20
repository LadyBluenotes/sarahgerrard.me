import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import { z } from "zod";
import { createHtml } from "~/utils/createHtml";
import { codeToHtml, remarkPlugins } from "~/utils/markdown";

const blog = defineCollection({
	name: "blog",
	directory: "content/blog",
	include: ["**/*.md"],
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		draft: z.boolean().optional(),
	}),
	transform: async (doc, { documents, skip, collection, cache }) => {
		const html = await cache(doc.content, async (content) => {
			return await createHtml(content);
		});
		if (doc.draft) {
			return skip("Draft post");
		}
		return {
			...doc,
			html,
		};
	},
});

const thoughts = defineCollection({
	name: "thoughts",
	directory: "content/thoughts",
	include: ["**/*.md"],
	schema: z.object({
		title: z.string(),
		summary: z.string(),
	}),
	transform: async (document, context) => {
		const html = await compileMarkdown(context, document);
		return {
			...document,
			html,
		};
	},
});

export default defineConfig({
	collections: [blog, thoughts],
});
