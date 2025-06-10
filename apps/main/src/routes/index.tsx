import { A } from "@solidjs/router";
import { For, Show } from "solid-js";
import Button from "~/components/common/Button";
import { Card } from "~/components/common/Card";
import Icon from "~/components/common/Icon";
import { Hero } from "~/components/layout/Hero";
import LetterGlitch from "~/components/LetterGlitch";
import { About } from "~/data";

export default function Home() {
	return (
		<div class="home-page">
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

			<section class="section about-section">
				<div class="container">
					<h2 class="section-title">About Me</h2>

					<div class="about-content">
						<div class="about-text">
							<p>
								I'm a passionate software developer specializing in creating
								modern web applications. With a focus on clean code and
								intuitive user experiences, I build software that's both
								beautiful and functional.
							</p>
							<p>
								My expertise includes front-end development with frameworks like
								React, SolidJS, and Vue, as well as back-end work with Node.js.
								I'm committed to writing maintainable, accessible code that
								follows best practices.
							</p>
							<p>
								When I'm not coding, you can find me contributing to open-source
								projects, writing technical articles, or exploring new
								technologies.
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

			<section class="section contact-cta-section">
				<div class="container">
					<div class="contact-cta">
						<h2 class="contact-cta-title">Interested in working together?</h2>
						<p class="contact-cta-text">
							I'm always open to discussing new projects, creative ideas, or
							opportunities to be part of your vision.
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
		</div>
	);
}
