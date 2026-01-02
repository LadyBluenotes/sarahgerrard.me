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
				description: `The personal website of Sarah Gerrard - software developer, tech enthusiast, and lifelong learner. Explore my projects, blog posts, and more.`,
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
			{
				children: `
					(function() {
						let theme = localStorage.getItem('theme');
						let prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			
						if (!theme) {
							if (prefersDark) {
								document.documentElement.setAttribute('data-theme', 'dark');
							} else {
								document.documentElement.setAttribute('data-theme', 'light');
							}
						} else {
							document.documentElement.setAttribute('data-theme', theme);
						}
					})();`,
			},
		],
	}),
	scripts: () => [
		{
			async: true,
			src: "https://www.googletagmanager.com/gtag/js?id=G-FD4EDGWJ5V",
		},
		{
			children: `
					(function(w,d,s,l,i){
 w[l]=w[l]||[];
 w[l].push({'gtag.js':new Date()});
 var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl='';
 j.async=true;j.src='https://www.googletagmanager.com/gtag/js?id='+i+dl;
 f.parentNode.insertBefore(j,f);
 w.gtag=w.gtag||function(){w[l].push(arguments);};
 w.gtag('config',i);
})(window,document,'script','dataLayer','G-FD4EDGWJ5V');

					`,
		},
	],
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
