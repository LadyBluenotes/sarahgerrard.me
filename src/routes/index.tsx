import { createFileRoute, Link } from "@tanstack/solid-router";
import { SocialButton } from "~/ui/components/SocialButton";
export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<main class="max-w-3xl mx-auto p-6 sm:px-8 lg:px-8">
			<h1>Sarah Gerrard</h1>
			<h2 class="-mt-4">Software Dev, OSS Enthusiast</h2>
			<p>
				Between the creativity, problem-solving, and constant learning, software
				development is my ideal career. Building tools that help others and make
				their lives easier is incredibly rewarding. I believe that technology
				has the power to change lives for the better, so making accessible,
				user-friendly software is always my goal.
			</p>
			<p>
				Open source is a huge part of my life. I've{" "}
				<Link to="/oss">contributed to many projects</Link> over the years, and
				I'm a maintainer of a few libraries. Being part of communities that work
				together to build awesome software is something I truly value. I believe
				that without open source software, the tech industry wouldn't be what it
				is today.
			</p>
			<p>
				Outside of coding, I have a healthy list of hobbies. Between the baking,
				reading, swimming, working out, and video games, to name a few, I always
				have something keeping me busy.
			</p>
			<p>
				I live in the beautiful city of Vancouver, Canada. With its growing tech
				scene, I'm excited to be part of such a vibrant community and I'd love
				to connect with other local developers!
			</p>
			How to find me:
			<ul class="flex gap-4 mt-4">
				<li>
					<SocialButton type="github" />
				</li>
				<li>
					<SocialButton type="bsky" />
				</li>
				<li>
					<SocialButton type="linkedin" />
				</li>
				<li>
					<SocialButton type="emailme" />
				</li>
			</ul>
		</main>
	);
}
