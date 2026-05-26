// <reference types="vite/client" />
import { createRootRoute, HeadContent, Scripts } from "@tanstack/solid-router";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";
import { HydrationScript } from "solid-js/web";
import type * as Solid from "solid-js";
import { DefaultCatchBoundary } from "~/ui/components/errors/DefaultCatchBoundary";
import { NotFound } from "~/ui/components/errors/NotFound";
import { seo } from "~/utils/seo";

import "virtual:uno.css";
import "@unocss/reset/tailwind-compat.css";

import "../ui/styles/index.css";
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
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: "Sarah Gerrard's RSS Feed",
        href: "/rss.xml",
      },
    ],
    scripts: [
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-FD4EDGWJ5V",
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
	  				function gtag(){dataLayer.push(arguments);}
	  				gtag('js', new Date());
	  				gtag('config', 'G-FD4EDGWJ5V');`,
      },
      {
        children: `
						(function() {
							function getSourceTheme(source) {
								var dataTheme = source.getAttribute('data-theme');
								if (dataTheme) {
									return dataTheme;
								}
								var media = source.getAttribute('media') || source.getAttribute('data-media') || '';
								if (/prefers-color-scheme\s*:\s*dark/i.test(media)) {
									return 'dark';
								}
								if (/prefers-color-scheme\s*:\s*light/i.test(media)) {
									return 'light';
								}
								return null;
							}
		
							function stripColorScheme(media) {
								if (!media) {
									return '';
								}
								var cleaned = media.replace(/\(\s*prefers-color-scheme\s*:\s*(dark|light)\s*\)/gi, '');
								cleaned = cleaned.replace(/\s+and\s+/gi, ' and ');
								cleaned = cleaned.replace(/\s{2,}/g, ' ');
								cleaned = cleaned.replace(/^\s*and\s*|\s*and\s*$/gi, '');
								return cleaned.trim();
							}
		
							function updateThemePictures(theme, root) {
								var scope = root || document;
								var pictures = scope.querySelectorAll('picture');
								pictures.forEach(function(picture) {
									var sources = picture.querySelectorAll('source');
									var hasThemeSource = false;
									var activeSrcset = null;
									sources.forEach(function(source) {
										var sourceTheme = getSourceTheme(source);
										if (!sourceTheme) {
											return;
										}
										hasThemeSource = true;
										var originalSrcset = source.getAttribute('data-srcset');
										if (!originalSrcset) {
											var currentSrcset = source.getAttribute('srcset');
											if (currentSrcset) {
												source.setAttribute('data-srcset', currentSrcset);
												originalSrcset = currentSrcset;
											}
										}
										var originalMedia = source.getAttribute('data-media');
										if (!originalMedia) {
											var currentMedia = source.getAttribute('media');
											if (currentMedia) {
												source.setAttribute('data-media', currentMedia);
												originalMedia = currentMedia;
											}
										}
			
										if (sourceTheme === theme) {
											if (originalSrcset) {
												source.setAttribute('srcset', originalSrcset);
												activeSrcset = originalSrcset;
											}
											var baseMedia = stripColorScheme(originalMedia || source.getAttribute('media') || '');
											source.setAttribute('media', baseMedia || 'all');
										} else {
											source.removeAttribute('srcset');
											source.setAttribute('media', 'not all');
										}
									});
			
									if (!hasThemeSource) {
										return;
									}
			
									var img = picture.querySelector('img');
									if (img) {
										var themeSrc = null;
										if (img.hasAttribute('data-src-dark') || img.hasAttribute('data-src-light')) {
											themeSrc = theme === 'dark' ? img.getAttribute('data-src-dark') : img.getAttribute('data-src-light');
										}
										if (!themeSrc && activeSrcset) {
											themeSrc = activeSrcset.split(',')[0].trim().split(/\s+/)[0];
										}
										if (themeSrc) {
											img.setAttribute('src', themeSrc);
										}
									}
								});
							}
		
							var savedTheme = localStorage.getItem('theme');
							var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
							var currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
		
							function setThemePictures(theme) {
								currentTheme = theme;
								updateThemePictures(theme);
							}
		
							window.updateThemePictures = setThemePictures;
		
							document.documentElement.setAttribute('data-theme', currentTheme);
							document.documentElement.classList.toggle('dark', currentTheme === 'dark');
							updateThemePictures(currentTheme);
							window.addEventListener('DOMContentLoaded', function() {
								updateThemePictures(currentTheme);
							});
		
							var observer = new MutationObserver(function(mutations) {
								var shouldUpdate = false;
								mutations.forEach(function(mutation) {
									mutation.addedNodes.forEach(function(node) {
										if (node.nodeType !== 1) {
											return;
										}
										if (node.matches && node.matches('picture')) {
											shouldUpdate = true;
										}
										if (!shouldUpdate && node.querySelector) {
											if (node.querySelector('picture')) {
												shouldUpdate = true;
											}
										}
									});
								});
			
								if (shouldUpdate) {
									updateThemePictures(currentTheme);
								}
							});
		
							observer.observe(document.documentElement, {
								childList: true,
								subtree: true,
							});
						})();`,
      },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
});

function RootDocument(props: { children: Solid.JSX.Element }) {
  return (
    <html lang="en">
      <head>
        <HydrationScript />
      </head>
      <body>
        <HeadContent />
        <Header />
        {props.children}
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}
