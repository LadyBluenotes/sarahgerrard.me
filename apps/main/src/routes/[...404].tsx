import { A } from "@solidjs/router";
import { createEffect } from "solid-js";
import Button from "~/components/common/Button";

export default function NotFound() {
	createEffect(() => {
		// add a script tag to the bottom of the page
		const script = document.createElement("script");
		script.src =
			"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.9.1/highlight.min.js";
		script.onload = () => {
			const codeBlock = document.querySelector(".content-codeblock pre code");
			if (codeBlock) {
				// @ts-ignore
				hljs.highlightBlock(codeBlock);
			}
		};
		document.body.appendChild(script);
	});

	return (
		<main>
			<div class="code-area">
				<div class="section-codeblock">
					<div class="content-codeblock">
						<pre class="js">
							<code>
								{`// 404 page not found.

  if (!found) {
    throw ("(╯°□°)╯︵ ┻━┻");
  }
`}
								//
								<Button
									as={A}
									href="/"
									variant="text"
									size="small"
									class="button-404"
								>
									click here to return Home
								</Button>
							</code>
						</pre>
					</div>
				</div>
			</div>
		</main>
	);
}
