import { ArrowLeft } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { sitePath } from '@/lib/site';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found shell">
        <span>404</span>
        <p className="eyebrow">СТРАНИЦА НЕ НАЙДЕНА</p>
        <h1>Кажется, вы залетели<br />не в тот зал</h1>
        <a className="button button--primary" href={sitePath('/')}><ArrowLeft size={17} /> На главную</a>
      </main>
    </>
  );
}
