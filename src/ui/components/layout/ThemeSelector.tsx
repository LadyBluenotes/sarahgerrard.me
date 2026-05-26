import { createSignal, onMount, Show } from "solid-js";
import { Button } from "@kobalte/core/button";

export const ThemeSelector = () => {
  const [darkMode, setDarkMode] = createSignal<boolean>(false);

  const applyTheme = (isDark: boolean) => {
    const theme = isDark ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", theme);
    (
      window as Window & { updateThemePictures?: (theme: string) => void }
    ).updateThemePictures?.(theme);
    setDarkMode(isDark);
  };

  onMount(() => {
    const theme =
      document.documentElement.dataset.theme ??
      window.localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  });

  // noinspection TypeScriptValidateTypes
  return (
    <Button
      aria-label="Toggle Theme"
      onClick={() => applyTheme(!darkMode())}
      class="text-[var(--inactive)] hover:text-[var(--hover-inactive)]"
    >
      <Show
        when={darkMode()}
        fallback={<div class="i-tabler-moon-stars h-1.2em w-1.2em icon" />}
      >
        <div class="i-tabler-sun-filled h-1.2em w-1.2em icon" />
      </Show>
    </Button>
  );
};
