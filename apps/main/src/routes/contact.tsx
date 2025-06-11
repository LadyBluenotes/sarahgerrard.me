import { ContactForm } from "~/components/common/ContactForm";
import Icon from "~/components/common/Icon";
import { Hero } from "~/components/layout/Hero";

export default function ContactPage() {
	return (
		<div class="contact-page">
			<Hero
				title="Contact Me"
				subtitle="Have a question or want to work together? Feel free to reach out!"
			/>

			<section class="section contact-section">
				<div class="container">
					<div class="contact-content">
						<div class="contact-info">
							<h2 class="section-title">Get In Touch</h2>

							<p class="contact-text">
								I'm currently available for freelance work, full-time positions,
								and consulting. If you have a project that needs some creative
								touch, don't hesitate to contact me.
							</p>

							<div class="contact-methods">
								<div class="contact-method">
									<Icon
										name="mail"
										class="contact-icon"
									/>
									<div class="contact-method-details">
										<h3 class="contact-method-title">Email</h3>
										<a
											href="mailto:hello@sarahgerrard.me"
											class="contact-method-value"
										>
											hello@sarahgerrard.me
										</a>
									</div>
								</div>

								<div class="contact-method">
									<Icon
										name="linkedin"
										class="contact-icon"
									/>
									<div class="contact-method-details">
										<h3 class="contact-method-title">LinkedIn</h3>
										<a
											href="https://www.linkedin.com/in/sarahgerrard"
											target="_blank"
											rel="noopener noreferrer"
											class="contact-method-value"
										>
											linkedin.com/in/sarahgerrard
										</a>
									</div>
								</div>

								<div class="contact-method">
									<Icon
										name="github"
										class="contact-icon"
									/>
									<div class="contact-method-details">
										<h3 class="contact-method-title">GitHub</h3>
										<a
											href="https://github.com/ladybluenotes"
											target="_blank"
											rel="noopener noreferrer"
											class="contact-method-value"
										>
											github.com/ladybluenotes
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="contact-form-section">
							<h2 class="section-title">Send a Message</h2>
							<ContactForm />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
