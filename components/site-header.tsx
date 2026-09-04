import { Menu, Phone, X } from 'lucide-react';
import { sitePath } from '@/lib/site';

const navigation = [
  ['Залы', '/halls/'],
  ['Форматы', '/events/'],
  ['Цены', '/prices/'],
  ['Галерея', '/gallery/'],
  ['Контакты', '/contacts/'],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <a className="brand" href={sitePath('/')} aria-label="LOFT Крылья — на главную">
          <span className="brand__mark" aria-hidden="true">K</span>
          <span className="brand__name"><strong>КРЫЛЬЯ</strong><small>LOFT SPACE</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.map(([label, href]) => <a href={sitePath(href)} key={href}>{label}</a>)}
        </nav>

        <div className="header-actions">
          <a className="phone-link" href="tel:+79260463955"><Phone size={16} /> +7 926 046-39-55</a>
          <a className="button button--small" href={sitePath('/contacts/#booking')}>Проверить дату</a>
        </div>

        <details className="mobile-menu">
          <summary aria-label="Открыть меню"><Menu className="menu-open" /><X className="menu-close" /></summary>
          <nav aria-label="Мобильная навигация">
            {navigation.map(([label, href]) => <a href={sitePath(href)} key={href}>{label}</a>)}
            <a href="tel:+79260463955">+7 926 046-39-55</a>
            <a className="button button--primary" href={sitePath('/contacts/#booking')}>Проверить дату</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
