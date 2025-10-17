import { createFileRoute } from '@tanstack/solid-router'
export const Route = createFileRoute('/(blog)/blog/')({
  component: PostsIndexComponent,
})

function PostsIndexComponent() {
  return <div>Select a post.</div>
}
