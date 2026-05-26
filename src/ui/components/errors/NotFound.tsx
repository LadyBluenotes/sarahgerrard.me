import { Link } from "@tanstack/solid-router";
import { Layout } from "../layout/Layout";

export function NotFound() {
  return (
    <Layout>
      <div class="flex flex-col justify-center items-center">
        <h1>Oops! Page Not Found (404)</h1>
        <img src="/images/404.svg" alt="Page not found" class="w-450px" />
        <p class="text-xl">Let's get you back on track!</p>
        <div class="flex gap-4 flex-wrap justify-center">
          <button onClick={() => window.history.back()} class="button">
            Go back
          </button>
          <Link to="/" class="button font-normal">
            Home Page
          </Link>
        </div>
      </div>
    </Layout>
  );
}
