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
				I'm passionate about software development because it combines
				creativity, problem-solving, and continuous learning in ways that
				challenge and inspire me every day. My drive comes from creating tools
				that make a real difference in people's lives. I'm committed to
				developing accessible, user-friendly software because I firmly believe
				in technology's power to positively transform how we live and work.
			</p>
			<p>
				Open source development has become an integral part of who I am. Through{" "}
				<Link to="/oss">contributing to various projects</Link>, I've found my
				place in this collaborative ecosystem. The spirit of sharing knowledge
				and building solutions together is incredibly important to me, and I
				firmly believe open source has been fundamental in shaping today's tech
				landscape.
			</p>
			<p>
				When I'm not coding, I maintain a balanced lifestyle through various
				activities. My passion for baking helps me stay creative, while regular
				swimming and workouts keep me energized. I also enjoy unwinding with a
				book, show, movie, or games, believing that these interests keep me
				well-rounded.
			</p>
			<p>
				Currently based in Vancouver, Canada, I'm fortunate to be part of this
				city's tech ecosystem. If you're looking to collaborate or just connect,
				feel free to reach out! I'm open to opportunities to collaborate and
				grow with other developers in the community and beyond.
			</p>
			How to find me:
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
