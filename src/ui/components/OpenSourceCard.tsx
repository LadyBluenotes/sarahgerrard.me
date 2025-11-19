interface OpenSourceCardProps {
	repo: string;
	stars: number;
	description: string;
	url: string;
}

export const OpenSourceCard = (props: OpenSourceCardProps) => {
	return (
		<div class="flex flex-col outline-1 outline-[--button-bg] p-4 rounded-lg w-full h-150px justify-between">
			<div class="flex items-center">
				<span class="font-semibold text-lg">{props.repo}</span>
				<span class="ml-auto bg-[--button-bg] rounded-full py-1 px-2 w-fit flex gap-1 text-xs">
					<div class="text-xs">⭐</div>
					{Intl.NumberFormat("en", { notation: "compact" }).format(props.stars)}
				</span>
			</div>
			<p class="text-[--inactive] line-clamp-2 m-0">{props.description}</p>
			<a
				href={props.url}
				target="_blank"
				rel="noreferrer"
				class="link w-fit ml-auto"
			>
				Visit Repo
			</a>
		</div>
	);
};
