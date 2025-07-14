import { A } from "@solidjs/router";
import { Component, createSignal, Index, Show } from "solid-js";
import Icon from "../common/Icon";
import { mobileLayout } from "@repo/utils/helpers";

import { ThemePicker } from "../common/ThemePicker";
import Button from "../common/Button";

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "OSS", href: "/oss" },
	// { name: "Projects", href: "/projects" },
	{ name: "Resume", href: "/resume" },
	{ name: "Contact", href: "/contact" },
];

export const Header: Component = () => {
	const [isMenuOpen, setIsMenuOpen] = createSignal(false);

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
						<span class="header-logo logo-text">SG</span>
					</A>
				</div>
				<Show when={false}>
					<Button
						class="menu-toggle"
						variant="text"
						size="small"
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						<Icon name={isMenuOpen() ? "close" : "menu"} />
					</Button>
				</Show>
				<Show when={!mobileLayout()}>
					<nav
						class="header-nav"
						classList={{
							"is-open": isMenuOpen(),
						}}
					>
						<ul class="nav-list">
							<Index each={navLinks}>
								{(link, i) => (
									<li class="nav-item">
										<A
											href={link().href}
											onClick={closeMenu}
											{...{ end: i === 0 ? true : undefined }}
											activeClass="active"
										>
											{link().name}
										</A>
									</li>
								)}
							</Index>
						</ul>
					</nav>

					<ThemePicker />
				</Show>
			</div>
		</header>
	);
};
