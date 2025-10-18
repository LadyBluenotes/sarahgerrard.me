import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/awesome-list/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/awesome-list/"!</div>
}
