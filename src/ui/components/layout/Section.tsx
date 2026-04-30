export const Section = (props: { children: any; class?: string }) => {
	return (
		<section
			class={`flex flex-col items-start border-b-1 border-[var(--detail)] ${props.class}`}
		>
			{props.children}
		</section>
	);
};
