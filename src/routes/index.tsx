import { createFileRoute } from "@tanstack/solid-router";
export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div class="max-w-3xl mx-auto p-6 sm:px-8 lg:px-8">
			<h1>Sarah Gerrard</h1>
			<h2 class="-mt-4">Software Dev, OSS Enthusiast</h2>
			<p>
				Between the creativity, problem-solving, and constant learning, software
				development is my ideal career. Building tools that help others and make
				their lives easier is incredibly rewarding. I believe that technology
				has the power to change lives for the better, so making accessible,
				user-friendly software is always my goal. This even extends to my
				advocacy for better documentation, both in open source and at work.
			</p>
			<p>
				Open source is a huge part of my life. I've{" "}
				<a href="/oss">contributed to many projects</a> over the years, and I'm
				a maintainer of a few libraries. Being part of communities that work
				together to build awesome software is something I truly value. I believe
				that without open source software, the tech industry wouldn't be what it
				is today.
			</p>
			<p>
				Outside of coding, I have a healthy list of hobbies. Between the baking,
				reading, swimming, working out, and video games, to name a few, I always
				have something keeping me busy. Inspired by{" "}
				<a href="https://antfu.me/">Anthony Fu</a>, I've started to keep a{" "}
				<a href="/awesome-list">list of my favourite things</a>.
			</p>
			<p>
				I live in the beautiful city of Vancouver, Canada. With its growing tech
				scene, I'm excited to be part of such a vibrant community and I'd love
				to connect with other local developers!
			</p>
			You can find me on <a href="https://github.com/ladybluenotes">GitHub</a>{" "}
			<a href="https://bsky.app/profile/ladybluenotes.dev">Bluesky</a>{" "}
			<a href="https://linkedin.com/in/sarahgerrard/">LinkedIn</a> or reach out
			via email at{" "}
			<a href="mailto:hello@sarahgerrard.me">hello@sarahgerrard.me</a>.
		</div>
	);
}
