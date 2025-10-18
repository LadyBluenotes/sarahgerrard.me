// <reference types="vite/client" />
import { HeadContent, Scripts, createRootRoute } from "@tanstack/solid-router";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";
import type * as Solid from "solid-js";
import { DefaultCatchBoundary } from "~/ui/components/errors/DefaultCatchBoundary";
import { NotFound } from "~/ui/components/errors/NotFound";
import { seo } from "~/utils/seo";
import cssStyles from "../ui/styles/index.css?url";

import "virtual:uno.css";
import "@unocss/reset/tailwind-compat.css";

import "../ui/styles/index.css?url";
import Header from "~/ui/components/layout/Header";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charset: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			...seo({
				title: "Sarah Gerrard",
				description: `Todo`,
			}),
		],
		links: [
			{
				rel: "stylesheet",
				href: cssStyles,
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png",
			},
			{ rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
			{ rel: "icon", href: "/favicon.ico" },
		],
		scripts: [
			{
				src: "https://cdn.jsdelivr.net/npm/@unocss/runtime",
			},
		],
	}),
	errorComponent: DefaultCatchBoundary,
	notFoundComponent: () => <NotFound />,
	shellComponent: RootDocument,
});

function RootDocument(props: { children: Solid.JSX.Element }) {
	return (
		<>
			<HeadContent />
			<Header />
			{props.children}
			<TanStackRouterDevtools position="top-right" />
			<Scripts />
		</>
	);
}
