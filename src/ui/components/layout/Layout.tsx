import { ParentComponent } from "solid-js";

export const Layout: ParentComponent = (props) => {
  return (
    <main class="mx-auto flex w-full max-w-5xl flex-col px-6 pb-16 sm:px-8">
      {props.children}
    </main>
  );
};
