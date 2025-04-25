import { Tabs } from "@kobalte/core";
import {
	cookieStorage,
	makePersisted,
	messageSync,
} from "@solid-primitives/storage";
import { A } from "@solidjs/router";
import {
	type Accessor,
	type ComponentProps,
	For,
	type ParentProps,
	Show,
	children,
	createSignal,
} from "solid-js";

export const strong = (props: ParentProps) => (
	<b class="font-semibold">{props.children}</b>
);
export const ssr = (props: ParentProps) => <>{props.children}</>;
export const spa = () => <></>;
export const h1 = (props: ParentProps) => <h1 {...props}>{props.children}</h1>;
export const h2 = (props: ParentProps) => {
	return <h2 {...props}>{props.children}</h2>;
};
export const h3 = (props: ParentProps) => {
	return <h3 {...props}>{props.children}</h3>;
};
export const h4 = (props: ParentProps) => {
	return <h4 {...props}>{props.children}</h4>;
};
export const h5 = (props: ParentProps) => {
	return <h5 {...props}>{props.children}</h5>;
};
export const h6 = (props: ParentProps) => <h6 {...props}>{props.children}</h6>;
export function a(props: ComponentProps<"a"> & { "data-auto-heading"?: "" }) {
	const outbound = () => (props.href ?? "").includes("//");

	return (
		<A
			target={outbound() ? "_blank" : undefined}
			rel={outbound() ? "noopener noreferrer" : undefined}
			href={props.href ?? ""}
			{...props}
		/>
	);
}
export const p = (props: ParentProps) => <p {...props}>{props.children}</p>;
export const li = (props: ParentProps) => <li {...props}>{props.children}</li>;
export const ul = (props: ParentProps) => <ul {...props}>{props.children}</ul>;
export const ol = (props: ParentProps) => <ol {...props}>{props.children}</ol>;
export const nav = (props: ParentProps) => (
	<nav {...props}>{props.children}</nav>
);

export const pre = (props: ParentProps) => {
	return <pre {...props}>{props.children}</pre>;
};
export const code = (props: ParentProps) => (
	<code
		class="bg-black/5 font-mono rounded-md px-1 text-code"
		{...props}
	>
		{props.children}
	</code>
);

export const table = (props: ParentProps) => <table>{props.children}</table>;
export const th = (props: ParentProps) => <th>{props.children}</th>;
export const thead = (props: ParentProps) => <thead>{props.children}</thead>;
export const td = (props: ParentProps) => <td>{props.children}</td>;
export const tr = (props: ParentProps) => <tr>{props.children}</tr>;
export const hr = (props: ParentProps) => <hr {...props} />;

export const img = (props: ComponentProps<"img">) => {
	return (
		<img
			class="rounded-md mx-auto"
			alt={props.alt}
			src={props.src}
			loading="lazy"
			{...props}
		/>
	);
};

export const response = (props: ParentProps) => {
	return <span>{props.children}</span>;
};

export function DirectiveContainer(
	props: {
		type:
			| "info"
			| "note"
			| "tip"
			| "important"
			| "warning"
			| "danger"
			| "caution"
			| "details"
			| "tab-group"
			| "tab";
		title?: string;
		codeGroup?: string;
		tabNames?: string;
	} & ParentProps
) {
	const _children = children(() => props.children).toArray();

	if (props.type === "tab") {
		return _children;
	}

	if (props.type === "tab-group") {
		const tabNames = props.tabNames?.split("\0");

		const tabs = (value?: Accessor<string>, onChange?: (s: string) => void) => (
			<Tabs.Root
				value={value?.()}
				onChange={onChange}
				class="tabs-container"
			>
				<Tabs.List class="tabs-list">
					{tabNames?.map((title) => {
						return (
							<Tabs.Trigger
								class="tabs-trigger"
								value={title}
							>
								{title}
							</Tabs.Trigger>
						);
					})}
				</Tabs.List>

				<For each={tabNames}>
					{(title, i) => (
						<Tabs.Content
							value={title}
							forceMount={true}
							class="tabs-content"
						>
							<div>{_children[i()]}</div>
						</Tabs.Content>
					)}
				</For>
			</Tabs.Root>
		);

		if (!props.title) return tabs();

		const [openTab, setOpenTab] = makePersisted(createSignal(tabNames![0]!), {
			name: `tab-group:${props.title}`,
			sync: messageSync(new BroadcastChannel("tab-group")),
			storage: cookieStorage.withOptions({
				expires: new Date(+new Date() + 3e10),
			}),
		});

		return tabs(openTab, setOpenTab);
	}

	if (props.type === "details") {
		return (
			<details
				class="custom-container"
				data-custom-container="details"
			>
				<summary>{props.title ?? props.type}</summary>
				{_children}
			</details>
		);
	}

	return (
		<div
			class="custom-container"
			data-custom-container={props.type}
		>
			<Show when={props.title !== " "}>
				<span>{props.title ?? props.type}</span>
			</Show>
			{_children}
		</div>
	);
}

export function Steps(props: ParentProps) {
	return <div class="steps">{props.children}</div>;
}

export function Step(props: ParentProps) {
	return <div class="step">{props.children}</div>;
}
