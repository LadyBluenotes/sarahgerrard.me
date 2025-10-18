import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/awesome-list/books/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/awesome-list/books/"!</div>
}
