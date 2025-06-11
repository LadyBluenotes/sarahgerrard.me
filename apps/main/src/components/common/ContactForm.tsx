import { createStore } from "solid-js/store";
import Button from "./Button";
import { Show } from "solid-js";

export const ContactForm = () => {
	const [contactStore, setContactStore] = createStore({
		name: "",
		email: "",
		message: "",
		isSubmitting: false,
		submitted: false,
		error: "",
	});

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		setContactStore({
			isSubmitting: true,
			error: "",
		});

		setTimeout(() => {
			setContactStore({
				name: "",
				email: "",
				message: "",
				isSubmitting: false,
				submitted: true,
				error: "",
			});
			setTimeout(() => {
				setContactStore("submitted", false);
			}, 5000);
		}, 1500);
	};

	return (
		<div class="contact-form-container">
			<form
				class="contact-form"
				onSubmit={handleSubmit}
			>
				<Show
					when={contactStore.submitted}
					fallback={
						<>
							<div class="form-group">
								<label
									for="name"
									class="form-label"
								>
									Name
								</label>
								<input
									id="name"
									type="text"
									class="form-input"
									value={contactStore.name}
									onInput={(e) =>
										setContactStore("name", e.currentTarget.value)
									}
									required
									aria-required="true"
								/>
							</div>

							<div class="form-group">
								<label
									for="email"
									class="form-label"
								>
									Email
								</label>
								<input
									id="email"
									type="email"
									class="form-input"
									value={contactStore.email}
									onInput={(e) =>
										setContactStore("email", e.currentTarget.value)
									}
									required
									aria-required="true"
								/>
							</div>

							<div class="form-group">
								<label
									for="message"
									class="form-label"
								>
									Message
								</label>
								<textarea
									id="message"
									class="form-textarea"
									value={contactStore.message}
									onInput={(e) =>
										setContactStore("message", e.currentTarget.value)
									}
									required
									aria-required="true"
									rows={6}
								></textarea>
							</div>
						</>
					}
				>
					<div class="form-success">
						<h3>Message Sent!</h3>
						<p>
							Thank you for reaching out. I'll get back to you as soon as
							possible.
						</p>
					</div>
				</Show>

				<Show when={contactStore.error}>
					<div class="form-error">{contactStore.error}</div>
				</Show>

				<Button
					type="submit"
					disabled={contactStore.isSubmitting}
					fullWidth
				>
					{contactStore.isSubmitting ? "Sending..." : "Send Message"}
				</Button>
			</form>
		</div>
	);
};
