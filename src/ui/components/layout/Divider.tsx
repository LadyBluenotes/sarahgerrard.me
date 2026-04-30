export const Divider = (props: { class?: string }) => {
	return (
		<hr class={`border-t-1 border-[var(--detail)] z-[1] w-full ${props.class}`} />
	);
};
