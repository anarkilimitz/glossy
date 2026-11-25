import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '../../shared/config/site';
import { Button, Container, IconButton, Link } from '../../shared/ui';
import { useHeaderScroll } from './useHeaderScroll';

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuButtonRef = useRef<HTMLButtonElement>(null);
	const firstLinkRef = useRef<HTMLAnchorElement>(null);
	const { isHidden } = useHeaderScroll();

	useEffect(() => {
		if (isMenuOpen) firstLinkRef.current?.focus();
	}, [isMenuOpen]);

	useEffect(() => {
		if (!isMenuOpen) return undefined;
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsMenuOpen(false);
				menuButtonRef.current?.focus();
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isMenuOpen]);

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<header className={`site-header${isHidden ? ' site-header--hidden' : ''}`}>
			<Container>
				<div className="site-header__bar">
					<Link
						to="/#home"
						className="site-header__brand"
						aria-label={`${siteConfig.companyName}, на главную`}
					>
						{siteConfig.companyName}
					</Link>
					<nav
						className="site-header__desktop-nav"
						aria-label="Основная навигация"
					>
						{siteConfig.navigation.map((item) => (
							<a key={item.href} href={item.href}>
								{item.label}
							</a>
						))}
					</nav>
					<div className="site-header__actions">
						<a
							className="site-header__phone"
							href={`tel:${siteConfig.phones[0].replace(/[^+\d]/g, '')}`}
						>
							{siteConfig.phones[0]}
						</a>
						<Button
							className="site-header__cta"
							size="small"
							onClick={() => {
								window.location.hash = 'contacts';
							}}
						>
							Записаться на ремонт
						</Button>
						<IconButton
							ref={menuButtonRef}
							className="site-header__menu-button"
							aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
							aria-expanded={isMenuOpen}
							aria-controls="mobile-navigation"
							onClick={() => setIsMenuOpen((open) => !open)}
						>
							<span aria-hidden="true" className="site-header__menu-icon">
								{isMenuOpen ? '×' : '☰'}
							</span>
						</IconButton>
					</div>
				</div>
				<nav
					id="mobile-navigation"
					className={`site-header__mobile-nav${
						isMenuOpen ? ' site-header__mobile-nav--open' : ''
					}`}
					aria-label="Мобильная навигация"
					hidden={!isMenuOpen}
				>
					{siteConfig.navigation.map((item, index) => (
						<a
							key={item.href}
							ref={index === 0 ? firstLinkRef : undefined}
							href={item.href}
							onClick={closeMenu}
						>
							{item.label}
						</a>
					))}
					<a
						href={`tel:${siteConfig.phones[0].replace(/[^+\d]/g, '')}`}
						onClick={closeMenu}
					>
						{siteConfig.phones[0]}
					</a>
				</nav>
			</Container>
		</header>
	);
}
