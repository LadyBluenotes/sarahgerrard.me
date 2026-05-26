import { JSX } from "solid-js";

export const Section = (props: { children: JSX.Element; class?: string }) => {
  return (
    <section
      class={`flex w-full flex-col items-start border-b border-[var(--rule)] ${props.class ?? ""}`}
    >
      {props.children}
    </section>
  );
};
