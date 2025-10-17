import { createFileRoute } from '@tanstack/solid-router'
export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div class="p-2">
      <h3 class="bg-red">Welcome Home!!!</h3>
    </div>
  )
}
