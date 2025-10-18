import { createFileRoute } from "@tanstack/solid-router";
import { Layout } from "~/ui/components/layout/Layout";

export const Route = createFileRoute("/awesome-list")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Layout>Hello "/awesome-list"!</Layout>;
}
