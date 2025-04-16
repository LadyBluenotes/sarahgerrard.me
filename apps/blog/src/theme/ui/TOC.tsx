import { Index, Show, createEffect, createSignal, on } from "solid-js";
import {
	useCurrentPageData,
	TableOfContentsItemData,
} from "@kobalte/solidbase/client";
import { createEventListener } from "@solid-primitives/event-listener";
import { isServer } from "solid-js/web";

export const TableOfContents = () => {
	const data = useCurrentPageData();
	const toc = () => data()?.toc;

	const [currentSection, setCurrentSection] = createSignal<string>();

	const [headingElements, setHeadingElements] = createSignal<
		Array<{ href: string; el?: HTMLElement }>
	>([]);

	createEffect(
		on(toc, (toc) => {
			if (!toc) return [];
			setHeadingElements(
				toc
					.map(flattenData)
					.flat()
					.map((href) => {
						const el = document.getElementById(href.slice(1)) ?? undefined;

						return { href, el };
					})
			);
		})
	);

	if (!isServer)
		createEventListener(window, "scroll", () => {
			let current;

			for (const heading of headingElements()) {
				if (!heading.el) continue;
				if (heading.el.getBoundingClientRect().top < 300) {
					current = heading.href;
				}
			}

			setCurrentSection(current);
		});

	return (
		<>
			<span class="font-semibold text-sm ui-toc">On this page</span>
			<ol
				role="list"
				class="ui-toc"
			>
				<Index each={toc()}>
					{(section) => (
						<li class="">
							<a
								href={section().href}
								classList={{
									"text-pink": currentSection() !== section().href,
									"text-red": currentSection() === section().href,
								}}
								class="no-underline"
							>
								{section().title}
							</a>
							<Show when={section().children.length > 0}>
								<ol role="list">
									<Index each={section().children}>
										{(subSection) => (
											<li>
												<a
													href={subSection().href}
													classList={{
														"text-pink": currentSection() !== subSection().href,
														"text-red": currentSection() === subSection().href,
													}}
													class=""
												>
													{subSection().title}
												</a>
											</li>
										)}
									</Index>
								</ol>
							</Show>
						</li>
					)}
				</Index>
			</ol>
		</>
	);
};

function flattenData(data: TableOfContentsItemData): Array<string> {
	return [data?.href, ...(data?.children ?? []).flatMap(flattenData)].filter(
		Boolean
	);
}
