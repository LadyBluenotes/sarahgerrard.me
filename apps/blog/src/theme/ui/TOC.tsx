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
		<Show when={}>
			<span class="font-semibold text-sm">On this page</span>
			<ol
				role="list"
				class="ui-toc ui-toc-list pt-4"
			>
				<Index each={toc()}>
					{(section) => (
						<li class="ui-toc-list pl-2">
							<a
								href={section().href}
								classList={{
									"text-#c9cecf hover:text-#edb4ab":
										currentSection() !== section().href,
									"text-#ae303c": currentSection() === section().href,
								}}
								class="no-underline"
							>
								{section().title}
							</a>
							<Show when={section().children.length > 0}>
								<ol
									role="list"
									class="ui-toc-list"
								>
									<Index each={section().children}>
										{(subSection) => (
											<li class="pl-4">
												<a
													href={subSection().href}
													classList={{
														"text-#c9cecf hover:text-#edb4ab":
															currentSection() !== subSection().href,
														"text-#ae303c":
															currentSection() === subSection().href,
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
		</Show>
	);
};

function flattenData(data: TableOfContentsItemData): Array<string> {
	return [data?.href, ...(data?.children ?? []).flatMap(flattenData)].filter(
		Boolean
	);
}
