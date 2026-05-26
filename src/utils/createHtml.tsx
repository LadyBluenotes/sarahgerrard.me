import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";

import rehypeShiki from "@shikijs/rehype";
import {
  transformerMetaHighlight,
  transformerNotationDiff,
} from "@shikijs/transformers";

const sanitizeSchema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), "picture", "source"],
  attributes: {
    ...defaultSchema.attributes,
    picture: ["className", "data-theme-picture", "dataThemePicture"],
    source: [
      "srcset",
      "srcSet",
      "type",
      "media",
      "sizes",
      "data-theme",
      "dataTheme",
      "data-srcset",
      "dataSrcset",
      "data-media",
      "dataMedia",
    ],
    img: [
      ...((defaultSchema.attributes?.img as string[]) ?? []),
      "srcset",
      "srcSet",
      "data-src-dark",
      "dataSrcDark",
      "data-src-light",
      "dataSrcLight",
    ],
  },
  protocols: {
    ...defaultSchema.protocols,
    srcset: ["http", "https", "data"],
  },
};

type HastNode = {
  type?: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

const stashSourceMedia = () => (tree: HastNode) => {
  const stack: HastNode[] = [tree];
  while (stack.length) {
    const node = stack.pop();
    if (!node || typeof node !== "object") {
      continue;
    }
    if (node.type === "element" && node.tagName === "source") {
      const properties = node.properties ?? {};
      const media = properties.media;
      if (
        typeof media === "string" &&
        !properties["data-media"] &&
        !properties.dataMedia
      ) {
        properties["data-media"] = media;
        properties.dataMedia = media;
        node.properties = properties;
      }
    }
    if (Array.isArray(node.children)) {
      stack.push(...node.children);
    }
  }
};

const restoreSourceMedia = () => (tree: HastNode) => {
  const stack: HastNode[] = [tree];
  while (stack.length) {
    const node = stack.pop();
    if (!node || typeof node !== "object") {
      continue;
    }
    if (node.type === "element" && node.tagName === "source") {
      const properties = node.properties ?? {};
      const media = properties.media;
      const dataMedia = properties.dataMedia ?? properties["data-media"];
      if (!media && typeof dataMedia === "string") {
        properties.media = dataMedia;
        node.properties = properties;
      }
    }
    if (Array.isArray(node.children)) {
      stack.push(...node.children);
    }
  }
};

const processFile = unified()
  .use(remarkParse, { fragments: true })
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(stashSourceMedia)
  .use(rehypeSanitize, sanitizeSchema)
  .use(restoreSourceMedia)
  .use(rehypeShiki, {
    transformers: [transformerNotationDiff(), transformerMetaHighlight()],
    themes: {
      light: "vitesse-light",
      dark: "gruvbox-dark-hard",
    },
  })
  .use(rehypeStringify, {
    allowDangerousHtml: true,
  });

export async function createHtml(post: string) {
  const result = await processFile().process(post);

  return String(result);
}
