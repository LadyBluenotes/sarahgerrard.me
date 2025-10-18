import { createFileRoute } from "@tanstack/solid-router";
import { Layout } from "~/ui/components/layout/Layout";

export const Route = createFileRoute("/projects")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Layout>Hello "/projects"!</Layout>;
}
