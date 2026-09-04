import { ArrowUpRight } from 'lucide-react';
import { sitePath } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-cta shell">
        <p className="eyebrow">ВАШЕ СОБЫТИЕ</p>
        <h2>Планируете событие?</h2>
        <a href={sitePath('/contacts/#booking')}>Проверить свободную дату <ArrowUpRight size={24} /></a>
      </div>
      <div className="shell site-footer__inner">
        <a className="brand brand--footer" href={sitePath('/')}>
          <span className="brand__mark">K</span>
          <span className="brand__name"><strong>КРЫЛЬЯ</strong><small>LOFT SPACE</small></span>
        </a>
        <p>Два зала для праздников, съёмок и встреч в Королёве.</p>
        <div className="site-footer__contacts">
          <a href="tel:+79260463955">+7 926 046-39-55</a>
          <a href="mailto:loft_krilya@mail.ru">loft_krilya@mail.ru</a>
        </div>
        <p className="site-footer__address">Королёв<br />ул. Горького, 79, корп. 13</p>
      </div>
    </footer>
  );
}
