'use client';

import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { sitePath } from '@/lib/site';

const navigation = [
  ['Главная', '/'],
  ['Залы', '/halls/'],
  ['Форматы', '/events/'],
  ['Цены', '/prices/'],
  ['Галерея', '/gallery/'],
  ['Контакты', '/contacts/'],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen);
    return () => document.body.classList.remove('menu-is-open');
  }, [menuOpen]);

  const isCurrent = (href: string) => {
    const basePath = sitePath('/').replace(/\/+$/, '');
    const current = pathname.replace(basePath, '').replace(/\/+$/, '') || '/';
    const target = href.replace(/\/+$/, '') || '/';
    return current === target;
  };

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner shell">
          <a className="brand" href={sitePath('/')} aria-label="LOFT Крылья — на главную">
            <span className="brand__mark" aria-hidden="true">K</span>
            <span className="brand__name"><strong>КРЫЛЬЯ</strong><small>LOFT SPACE</small></span>
          </a>

          <nav className="desktop-nav" aria-label="Основная навигация">
            {navigation.map(([label, href]) => (
              <a className={isCurrent(href) ? 'is-active' : undefined} href={sitePath(href)} key={href} aria-current={isCurrent(href) ? 'page' : undefined}>
                {label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="phone-link" href="tel:+79260463955"><Phone size={16} /> +7 926 046-39-55</a>
            <a className="button button--small button--booking" href={sitePath('/contacts/#booking')}>Проверить дату</a>
          </div>

          <button className="mobile-menu-trigger" type="button" aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <button className={`mobile-menu__backdrop${menuOpen ? ' is-open' : ''}`} type="button" tabIndex={menuOpen ? 0 : -1} aria-label="Закрыть меню" onClick={() => setMenuOpen(false)} />
        <aside className={`mobile-menu__panel${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
          <div className="mobile-menu__top">
            <span>МЕНЮ</span>
            <button type="button" aria-label="Закрыть меню" onClick={() => setMenuOpen(false)}><X /></button>
          </div>
          <nav aria-label="Мобильная навигация">
            {navigation.map(([label, href]) => (
              <a className={isCurrent(href) ? 'is-active' : undefined} href={sitePath(href)} key={href} aria-current={isCurrent(href) ? 'page' : undefined}>
                {label}
              </a>
            ))}
          </nav>
          <div className="mobile-menu__details">
            <a href="tel:+79260463955">+7 926 046-39-55</a>
            <p>Королёв, ул. Горького, 79, корп. 13</p>
          </div>
          <a className="button button--primary button--booking" href={sitePath('/contacts/#booking')}>Проверить дату</a>
        </aside>
      </header>
      <a className="mobile-booking-bar" href={sitePath('/contacts/#booking')}>Проверить дату <ArrowUpRight size={18} /></a>
    </>
  );
}
