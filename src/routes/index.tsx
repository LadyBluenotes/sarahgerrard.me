import { createFileRoute } from "@tanstack/solid-router";
import { SocialButton } from "~/ui/components/SocialButton";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<main class="max-w-3xl mx-auto p-6 sm:px-8 lg:px-8">
			<h1>Sarah Gerrard</h1>
			<h2 class="-mt-3">Software Dev, OSS Enthusiast</h2>
			<p>
				I'm a developer and writer passionate about open source. My goals always
				include making technology easy to understand, accessible, and useful for
				everyone.
			</p>
			<p>
				Over the years, I've contributed to{" "}
				<a
					href="https://github.com/ladybluenotes"
					rel="noopener noreferrer"
					target="_blank"
				>
					various open source projects
				</a>
				. I'm based in Vancouver, Canada and always open to new opportunities to
				connect and collaborate.
			</p>
			<p>
				Outside of coding, I'm often exploring different hobbies and activities.
				I fill my time with baking, reading, and playing video games. To stay
				active, I swim (sometimes competitively) and go to the gym.
			</p>
			<span>You can find me on:</span>
			<ul class="flex flex-wrap gap-4 mt-4">
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
