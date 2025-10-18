import { createFileRoute, Outlet } from "@tanstack/solid-router";

export const Route = createFileRoute("/blog")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div class="max-w-3xl mx-auto p-6 sm:px-8 lg:px-8">
			<ul class="flex items-center gap-4 mb-4">
				<li>
					<a
						href="/blog"
						class="text-blue-800 hover:text-blue-600"
					>
						Blog Posts
					</a>
				</li>
				<li>
					<a
						href="/blog/thoughts"
						class="text-blue-800 hover:text-blue-600"
					>
						Thoughts
					</a>
				</li>
			</ul>
			<hr class="my-4" />
			<Outlet />
		</div>
	);
}
