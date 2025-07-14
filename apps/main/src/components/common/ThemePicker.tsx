import { DropdownMenu } from "@kobalte/core/dropdown-menu";
import { useTheme } from "@repo/utils/useTheme";
import { Component, For } from "solid-js";
import Button from "./Button";

export const ThemePicker: Component = () => {
	const { themes, setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenu.Trigger
				as={Button}
				class="theme-toggle"
				aria-label="Change themes"
			>
				Theme
			</DropdownMenu.Trigger>
			<DropdownMenu.Content class="theme-content">
				<For each={Object.entries(themes)}>
					{([key, details]) => (
						<DropdownMenu.Item
							class="theme-option"
							onClick={() => setTheme(key as keyof typeof themes)}
						>
							{details.name}
						</DropdownMenu.Item>
					)}
				</For>
			</DropdownMenu.Content>
		</DropdownMenu>
	);
};
