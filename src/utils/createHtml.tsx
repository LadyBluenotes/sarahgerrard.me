import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";

import rehypeShiki from "@shikijs/rehype";
import {
	transformerMetaHighlight,
	transformerNotationDiff,
} from "@shikijs/transformers";

const processFile = unified()
	.use(remarkParse, { fragments: true })
	.use(remarkGfm)
	.use(remarkRehype, { allowDangerousHtml: true })
	.use(rehypeRaw)
	.use(rehypeShiki, {
		transformers: [
			transformerNotationDiff(),
			transformerMetaHighlight(),
		],
		themes: {
			light: "vitesse-light",
			dark: "gruvbox-dark-hard",
		},
	})
	.use(rehypeStringify, {
		allowDangerousHtml: true,
	});

export async function createHtml(post) {
	const result = await processFile().process(post);

	return String(result);
}
