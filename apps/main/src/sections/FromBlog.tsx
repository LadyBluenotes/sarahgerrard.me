import { Component } from "solid-js";
import { SectionContainer } from "~/components";

export const FromBlog: Component = () => {
	return (
		<SectionContainer
			id="from-blog"
			title="From the blog"
		>
			<a
				href="/"
				class="ui-link font-bold"
			>
				View all blog posts
			</a>
		</SectionContainer>
	);
};
