import { Tabs } from "@kobalte/core/tabs";
import { createSignal } from "solid-js";

export default function Home() {
	const [selectedTab, setSelectedTab] = createSignal("home");
	return (
		<div class="flex flex-col items-center py-24 w-full h-full">
			<div
				class="window active w-fit h-fit"
				style="max-width: 600px"
			>
				<div class="title-bar">
					<div class="title-bar-text">Sarah Gerrard</div>
					<div class="title-bar-controls">
						<button aria-label="Minimize"></button>
						<button aria-label="Maximize"></button>
						<button aria-label="Close"></button>
					</div>
				</div>
				<div class="window-body has-space px-2 pt-1">
					<Tabs
						aria-label="Main navigation"
						class="tabs mt-1"
						value={selectedTab()}
						onChange={setSelectedTab}
					>
						<Tabs.List role="tablist">
							<Tabs.Trigger
								role="tab"
								value="home"
								aria-controls="home"
							>
								Home
							</Tabs.Trigger>
							<Tabs.Trigger
								value="about"
								aria-controls="about"
							>
								About
							</Tabs.Trigger>
							<Tabs.Trigger
								value="contact"
								aria-controls="contact"
							>
								Contact
							</Tabs.Trigger>{" "}
						</Tabs.List>
						<Tabs.Content
							as="article"
							role="tabpanel"
							value="home"
							aria-hidden={selectedTab() !== "home"}
						>
							<h1>Hi, I'm Sarah!</h1>
							<p>
								Welcome to my temporary site! While I work on my new portfolio
								site, I figured what better time to throw back to the Windows XP
								days.
							</p>
							<p>
								You can learn a bit about me here in the meantime, or feel free
								to reach out via email or social media.
							</p>
						</Tabs.Content>
						<Tabs.Content
							as="article"
							role="tabpanel"
							value="about"
							aria-hidden={selectedTab() !== "about"}
						>
							<h1 class="text-1.5rem leading-4">Hi, I'm Sarah!</h1>
							<p>
								I'm a software developer who loves the problem solving and
								learning that comes with it. The web is an incredible playground
								for building, experimenting, and creation - and I love being a
								part of it.
							</p>
							<p>
								At the core, I'm passionate about open-source software and
								creating tools and experiences that are accessible to all. I
								firmly believe that software should be as fun to interact with
								as it is to build, and I always look for ways to break things,
								fix them, then make them better.
							</p>
							<p>
								When I'm not writing code, you'll probably find me playing video
								games, reading, spending time outdoors, or tinkering with my own
								projects. I love to learn new things, and I'm always willing to
								try something new, such as a new recipe, framework, or hobby.
							</p>
							<p>
								I'm currently working on a few projects, including a blog, an
								improved site to document all my projects, and a new portfolio
								site. I'm always looking for ways to improve my skills and learn
								new things, so if you have any suggestions or ideas, feel free
								to reach out! I love to collaborate and share knowledge with
								others.
							</p>
						</Tabs.Content>
						<Tabs.Content
							as="article"
							role="tabpanel"
							value="contact"
							aria-hidden={selectedTab() !== "contact"}
							class="flex flex-col"
						>
							<h1>Contact me</h1>
							<p>
								If you'd like to get in touch, you can email me at
								<a
									href="mailto:hello@sarahgerrard.me"
									class="px-1"
									target="_blank"
								>
									hello@sarahgerrard.me
								</a>
								or you can follow on any of my socials:
							</p>
							<div class="relative border-1 border-solid border-[#919b9c] rounded-sm bg-#f9f9f8 p-2 mt-2">
								<div class="absolute -top-2 bg-#f9f9f8 px-1">
									<span class="text-#0046d5">Links</span>
								</div>
								<ul>
									<li>
										<a
											href="https://bsky.app/profile/ladybluenotes.dev"
											target="_blank"
										>
											BlueSky
										</a>
									</li>
									<li>
										<a
											href="https://github.com/LadyBluenotes"
											target="_blank"
										>
											GitHub
										</a>
									</li>
									<li>
										<a
											href="https://www.linkedin.com/in/sarahgerrard/"
											target="_blank"
										>
											LinkedIn
										</a>
									</li>
								</ul>
							</div>
						</Tabs.Content>
					</Tabs>
					<section
						class="field-row pt-2"
						style="justify-content: flex-end"
					>
						<button>OK</button>
						<button>Cancel</button>
					</section>
				</div>
			</div>
		</div>
	);
}
