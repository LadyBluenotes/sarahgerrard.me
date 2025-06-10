import { A } from "@solidjs/router";
import { For, Show } from "solid-js";
import Button from "~/components/common/Button";
import { Card } from "~/components/common/Card";
import { Hero } from "~/components/layout/Hero";
import { About } from "~/data";

const HeroSection = () => (
	<Hero
		title="Hello, I'm a Creative Developer"
		subtitle="I build beautiful, accessible, and performant web applications with modern technologies."
	>
		<div class="hero-actions">
			<Button
				as={A}
				href="/projects"
				variant="primary"
				size="large"
			>
				View My Work
			</Button>
			<Button
				as={A}
				href="/contact"
				variant="outline"
				size="large"
			>
				Get In Touch
			</Button>
		</div>
	</Hero>
);

const AboutSection = () => (
	<section class="section about-section">
		<div class="container">
			<h2 class="section-title">About Me</h2>

			<div class="about-content">
				<div class="about-text">
					<p>
						I am a software developer focused on building for the web, with a
						passion for understanding systems from the inside out. True mastery,
						I believe, comes from a willingness to look under the hood and
						explore the source code.
					</p>
					<p>
						This curiosity naturally led me to open source, where I enjoy
						contributing to the tools that power the modern web. I currently
						serve as the Documentation Lead for SolidJS, helping to make its
						powerful reactivity clear and approachable for all developers.
					</p>
					<p>
						Beyond performance and clean code, I am a passionate advocate for
						web accessibility. I believe the most impressive technology is that
						which empowers everyone, making inclusivity a non-negotiable part of
						my development philosophy.
					</p>

					<div class="about-cta">
						<Button
							as={A}
							href="/resume"
							variant="outline"
						>
							View My Resume
						</Button>
					</div>
				</div>
				<div class="skills-container">
					<Card class="skills-card">
						<div class="glitch-container">
							<div class="environment"></div>
							<div
								class="glitch-box glitch layers"
								data-text="Hello world"
							>
								<span
									style={{
										"font-family": "monospace",
									}}
								>
									{"hello world"}
								</span>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</div>
	</section>
);

const SkillsSection = () => (
	<section class="section">
		<div class="container">
			<h2 class="section-title">Skills</h2>
			<div class="skills-grid">
				<For each={Object.values(About.expertise)}>
					{(skill) => (
						<Card
							title={skill.title}
							elevation="low"
							class="skill-card"
						>
							<Show when={skill.items}>
								<ul class="skill-list">
									<For each={skill.items}>{(item) => <li>{item}</li>}</For>
								</ul>
							</Show>
							<Show when={skill.subCategories}>
								<ul class="skill-list">
									<For each={Object.entries(skill.subCategories)}>
										{(subCategory) => (
											<li>
												<span>
													<strong>{subCategory[0]}: </strong>
													{subCategory[1].join(", ")}
												</span>
											</li>
										)}
									</For>
								</ul>
							</Show>
						</Card>
					)}
				</For>
			</div>
		</div>
	</section>
);

const ProjectsSection = () => {
	return (
		<section class="section projects-section">
			<div class="container">
				<div class="section-header">
					<h2 class="section-title">Featured Projects</h2>
					<Button
						as={A}
						href="/projects"
						variant="outline"
					>
						View All Projects
					</Button>
				</div>

				<div class="projects-grid"></div>
			</div>
		</section>
	);
};

const ContactCTASection = () => (
	<section class="section contact-cta-section">
		<div class="container">
			<div class="contact-cta">
				<h2 class="contact-cta-title">Interested in working together?</h2>
				<p class="contact-cta-text">
					Please feel free to reach out if you have any questions, want to
					discuss a project, or just want to say hello!
				</p>
				<Button
					as={A}
					href="/contact"
					variant="primary"
					size="large"
				>
					Get In Touch
				</Button>
			</div>
		</div>
	</section>
);

export default function Home() {
	return (
		<div class="home-page">
			<HeroSection />
			<AboutSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactCTASection />
		</div>
	);
}
