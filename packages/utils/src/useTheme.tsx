import {
	createContext,
	createEffect,
	createSignal,
	ParentProps,
	useContext,
} from "solid-js";
import { ThemeContextType, ThemeKey, Themes } from "./types";

const themes: Themes = {
	base: {
		name: "Base",
		class: "theme-base",
	},
	bw: {
		name: "Black & White",
		class: "theme-black-white",
	},
	pastelPink: {
		name: "Pastel Pink",
		class: "theme-pinks-pastels",
	},
	seaTones: {
		name: "Sea Tones",
		class: "theme-sea-tones",
	},
};

const ThemeContext = createContext<ThemeContextType>();

const ThemeProvider = (props: ParentProps) => {
	const savedTheme =
		typeof window !== "undefined"
			? (localStorage.getItem("portfolio-theme") as ThemeKey) || "base"
			: "base";

	const [theme, setTheme] = createSignal<ThemeKey>(savedTheme);

	createEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("portfolio-theme", theme());
			document.body.classList.remove(
				...Object.values(themes).map((t) => t.class)
			);
			if (themes[theme()]) {
				document.body.classList.add(themes[theme()].class);
			} else {
				document.body.classList.add(themes.base.class);
			}
		}
	});

	return (
		<ThemeContext.Provider value={{ theme, setTheme, themes }}>
			{props.children}
		</ThemeContext.Provider>
	);
};

function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}

export { ThemeProvider, useTheme };
