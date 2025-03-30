import { A } from "@solidjs/router";
import { type ParentProps, children, splitProps } from "solid-js";
import { isServer } from "solid-js/web";

export const strong = (props: ParentProps) => (
	<b class="font-semibold">{props.children}</b>
);
export const ssr = (props: ParentProps) => <>{props.children}</>;
export const spa = () => <></>;
export const h1 = (props: ParentProps) => (
	<h1
		{...props}
		class=""
	>
		{props.children}
	</h1>
);
export const h2 = (props: ParentProps) => {
	return (
		<>
			<hr class="" />
			<h2
				{...props}
				class=""
			>
				{props.children}
			</h2>
		</>
	);
};
export const h3 = (props: ParentProps) => {
	return (
		<h3
			{...props}
			class=""
		>
			{props.children}
		</h3>
	);
};
export const h4 = (props: ParentProps) => {
	return (
		<h4
			{...props}
			class=""
		>
			{props.children}
		</h4>
	);
};
export const h5 = (props: ParentProps) => {
	return (
		<h5
			{...props}
			class=""
		>
			{props.children}
		</h5>
	);
};
export const h6 = (props: ParentProps) => (
	<h6
		{...props}
		class=""
	>
		{props.children}
	</h6>
);
export const a = (props: ParentProps & { href: string }) => {
	const [, rest] = splitProps(props, ["children"]);
	const resolved = children(() => props.children);
	const resolvedArray = resolved.toArray();

	// Check if the link is a code block
	if (
		// Server side
		(isServer &&
			resolvedArray[0] &&
			typeof resolvedArray[0] === "object" &&
			"t" in resolvedArray[0] &&
			typeof resolvedArray[0].t === "string" &&
			resolvedArray[0].t.substring(0, 5) === "<code") ||
		// Client side
		(!isServer &&
			resolvedArray[0] instanceof Element &&
			resolvedArray[0].nodeName === "CODE")
	) {
		// eslint-disable-next-line solid/components-return-once
		return (
			<A
				class=""
				{...rest}
			>
				{resolved()}
			</A>
		);
	} else {
		// eslint-disable-next-line solid/components-return-once
		return (
			<A
				class=""
				{...rest}
			>
				{resolved()}
			</A>
		);
	}
};
export const p = (props: ParentProps) => (
	<p
		{...props}
		class="my-4"
	>
		{props.children}
	</p>
);
export const li = (props: ParentProps) => (
	<li
		{...props}
		class=""
	>
		{props.children}
	</li>
);
export const ul = (props: ParentProps) => (
	<ul
		{...props}
		class=""
	>
		{props.children}
	</ul>
);
export const ol = (props: ParentProps) => (
	<ol
		{...props}
		class=""
	>
		{props.children}
	</ol>
);
export const nav = (props: ParentProps) => (
	<nav {...props}>{props.children}</nav>
);

export const pre = (props: ParentProps) => {
	return (
		<pre
			{...props}
			class=""
		>
			{props.children}
		</pre>
	);
};
export const code = (props: ParentProps) => {
	return (
		<code
			class=""
			{...props}
		>
			{props.children}
		</code>
	);
};
export const table = (props: ParentProps) => <table>{props.children}</table>;
export const th = (props: ParentProps) => <th>{props.children}</th>;
export const thead = (props: ParentProps) => <thead>{props.children}</thead>;
export const td = (props: ParentProps) => <td>{props.children}</td>;
export const tr = (props: ParentProps) => <tr>{props.children}</tr>;
export const hr = (props: ParentProps) => {
	return (
		<hr
			{...props}
			class="dark:prose-hr:border-slate-900"
		/>
	);
};
export const response = (props: ParentProps) => {
	return <span>{props.children}</span>;
};

// export function DirectiveContainer(
// 	props: {
// 		type:
// 			| "info"
// 			| "note"
// 			| "tip"
// 			| "important"
// 			| "warning"
// 			| "danger"
// 			| "caution"
// 			| "details"
// 			| "tab-group"
// 			| "tab";
// 		title?: string;
// 		codeGroup?: string;
// 		tabNames?: string;
// 	} & ParentProps
// ) {
// 	const _children = children(() => props.children).toArray();

// 	if (props.type === "tab") {
// 		return _children;
// 	}

// 	if (props.type === "tab-group") {
// 		const tabNames = props.tabNames?.split("\0");

// 		const tabs = (value?: Accessor<string>, onChange?: (s: string) => void) => (
// 			<Tabs
// 				value={value?.()}
// 				onChange={onChange}
// 				class={styles["tabs-container"]}
// 			>
// 				<Tabs.List class={styles["tabs-list"]}>
// 					{tabNames?.map((title) => {
// 						return (
// 							<Tabs.Trigger
// 								class={styles["tabs-trigger"]}
// 								value={title}
// 							>
// 								{title}
// 							</Tabs.Trigger>
// 						);
// 					})}
// 				</Tabs.List>

// 				<For each={tabNames}>
// 					{(title, i) => (
// 						<Tabs.Content
// 							value={title}
// 							forceMount={true}
// 							class={styles["tabs-content"]}
// 						>
// 							<div>{_children[i()]}</div>
// 						</Tabs.Content>
// 					)}
// 				</For>
// 			</Tabs>
// 		);

// 		if (!props.title) return tabs();

// 		const [openTab, setOpenTab] = makePersisted(createSignal(tabNames![0]!), {
// 			name: `tab-group:${props.title}`,
// 			sync: messageSync(new BroadcastChannel("tab-group")),
// 			storage: cookieStorage.withOptions({
// 				expires: new Date(+new Date() + 3e10),
// 			}),
// 		});

// 		return tabs(openTab, setOpenTab);
// 	}

// 	if (props.type === "details") {
// 		return (
// 			<details
// 				class={styles["custom-container"]}
// 				data-custom-container="details"
// 			>
// 				<summary>{props.title ?? props.type}</summary>
// 				{_children}
// 			</details>
// 		);
// 	}

// 	return (
// 		<div
// 			class={styles["custom-container"]}
// 			data-custom-container={props.type}
// 		>
// 			<Show when={props.title !== " "}>
// 				<span>{props.title ?? props.type}</span>
// 			</Show>
// 			{_children}
// 		</div>
// 	);
// }
