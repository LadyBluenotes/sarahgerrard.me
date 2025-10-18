import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/awesome-list/tv/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/awesome-list/tv/"!</div>
}
