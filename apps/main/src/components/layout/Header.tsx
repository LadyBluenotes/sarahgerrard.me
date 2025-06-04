import { Button } from "@kobalte/core";
import { A, useLocation } from "@solidjs/router";
import { Component, createSignal } from "solid-js";
import Icon from "../common/Icon";

export const Header: Component = () => {
	const location = useLocation();
	const active = (path: string) =>
		path == location.pathname
			? "border-sky-600"
			: "border-transparent hover:border-sky-600";

	const [isMenuOpen, setIsMenuOpen] = createSignal(false);
	// const { theme, setTheme, nextTheme } = useTheme();

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen());
	const closeMenu = () => setIsMenuOpen(false);

	return (
		<header class="header">
			<div class="header-container container">
				<div class="header-logo">
					<A
						href="/"
						onClick={closeMenu}
					>
						<span class="header-logo logo-text">Test</span>
					</A>
				</div>

				{/* <Button
					class="menu-toggle"
					onClick={toggleMenu}
					aria-label="Toggle menu"
				> */}
				<Icon name={isMenuOpen() ? "close" : "menu"} />
				{/* </Button> */}
			</div>
		</header>
	);
};
