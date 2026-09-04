import type { Metadata } from 'next';
import { ArrowDown, Check, Plus } from 'lucide-react';
import { BookingCta } from '@/components/booking-cta';
import { PageIntro } from '@/components/page-intro';
import { PriceCalculator } from '@/components/price-calculator';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Цены и условия',
  description: 'Тарифы на аренду залов LOFT Крылья и понятные условия бронирования.',
};
export const dynamic = 'force-static';

const included = ['Мебель и базовая расстановка', 'Посуда до 30 персон', 'Световое оборудование', 'Акустическая система', 'Кондиционеры', 'Использование кухни при аренде тёмного зала'];
const faq = [
  ['Как забронировать дату?', 'Дата закрепляется после согласования времени и внесения задатка. Остаток оплачивается перед началом аренды.'],
  ['Можно ли принести свою еду?', 'Да. Можно заказать доставку, пригласить кейтеринг или приготовить часть блюд на кухне при аренде тёмного зала или всего пространства.'],
  ['Сколько времени заложить на подготовку?', 'Монтаж декора и сервировка входят во время аренды. Дополнительный технический час можно согласовать заранее.'],
  ['Можно ли со своим фотографом или ведущим?', 'Можно, но участие сторонних подрядчиков нужно согласовать с администратором до бронирования.'],
  ['Нужна ли сменная обувь?', 'Да, чистая сменная обувь обязательна для всех гостей в любое время года.'],
  ['Можно ли перенести бронирование?', 'Один перенос возможен при соблюдении срока предварительного уведомления. Точные условия фиксируются при бронировании.'],
];

export default function PricesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="ПРОЗРАЧНАЯ СТОИМОСТЬ"
          title={<>Понятно,<br />за что вы платите</>}
          lead="Сначала выберите формат и пространство. Всё включённое в аренду и возможные доплаты собраны на одной странице."
          aside="Тарифы в макете требуют актуализации"
        />

        <nav className="price-jump shell" aria-label="Навигация по разделу цен">
          <a href="#calculator">Расчёт <ArrowDown size={18} /></a>
          <a href="#rates">Цены <ArrowDown size={18} /></a>
          <a href="#faq">Частые вопросы <ArrowDown size={18} /></a>
        </nav>

        <section className="price-section shell" id="calculator">
          <div className="price-section__heading">
            <p className="eyebrow">РАССЧИТАТЬ</p>
            <h2>Предварительная стоимость</h2>
          </div>
          <PriceCalculator />
        </section>

        <section className="rate-grid shell" id="rates">
          <article className="rate-card">
            <p className="eyebrow">ФОТО И ВИДЕО</p>
            <h2>Один зал</h2>
            <div className="rate-card__price"><strong>от 2 000 ₽</strong><span>/ час</span></div>
            <p>Интерьер, фоны, оборудование и реквизит для съёмки.</p>
          </article>
          <article className="rate-card rate-card--accent">
            <p className="eyebrow">ПРАЗДНИКИ</p>
            <h2>Один зал</h2>
            <div className="rate-card__price"><strong>от 2 700 ₽</strong><span>/ час</span></div>
            <p>Мебель, посуда и всё необходимое для камерного события.</p>
          </article>
          <article className="rate-card rate-card--dark">
            <p className="eyebrow">ВСЁ ПРОСТРАНСТВО</p>
            <h2>Оба зала</h2>
            <div className="rate-card__price"><strong>от 3 300 ₽</strong><span>/ час</span></div>
            <p>110 м²: отдельная банкетная зона и пространство для программы.</p>
          </article>
        </section>

        <section className="included shell">
          <div>
            <p className="eyebrow">УЖЕ В АРЕНДЕ</p>
            <h2>Больше, чем<br />просто зал</h2>
          </div>
          <ul>
            {included.map((item) => <li key={item}><Check size={18} strokeWidth={1.5} />{item}</li>)}
          </ul>
        </section>

        <section className="faq shell" id="faq">
          <div className="faq__heading">
            <p className="eyebrow">ВАЖНО ЗНАТЬ</p>
            <h2>Частые вопросы</h2>
          </div>
          <div className="faq__list">
            {faq.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<Plus size={18} /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <BookingCta title="Получите точный расчёт вашего события" />
      </main>
      <SiteFooter />
    </>
  );
}
