/* oxlint-disable next/no-img-element */
import type { Metadata } from 'next';
import { ArrowDownRight } from 'lucide-react';
import { BookingCta } from '@/components/booking-cta';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { assetPath } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Форматы мероприятий',
  description: 'Праздники, фотосессии, свадьбы, корпоративы и мастер-классы в LOFT Крылья.',
};
export const dynamic = 'force-static';

const events = [
  { title: 'Дни рождения и вечеринки', text: 'Приватное пространство только для вас и ваших гостей: столы, музыка, фотозоны и место для танцев.', image: 'party-1.jpg', tag: 'до 80 гостей' },
  { title: 'Детские праздники', text: 'Безопасный просторный зал для аниматоров, шоу-программы, бумажной дискотеки и семейного застолья.', image: 'kids-1.jpg', tag: 'для любого возраста' },
  { title: 'Фото и видеосъёмка', text: 'Два разных интерьера, естественный свет, фактурные стены, фоны и профессиональное оборудование.', image: 'photo-1.jpg', tag: 'от 1 часа' },
  { title: 'Свадьбы и девичники', text: 'Камерное торжество, утро невесты или встреча с подругами в спокойной атмосфере без посторонних.', image: 'photo-2.jpg', tag: 'один или два зала' },
  { title: 'Корпоративы', text: 'Неформальная встреча команды, презентация продукта или праздничный вечер с собственной программой.', image: 'corporate-1.jpg', tag: 'гибкая рассадка' },
  { title: 'Мастер-классы и встречи', text: 'Рабочие поверхности, посадочные места, кухня и пространство, которое легко адаптировать под обучение.', image: 'light-3.jpg', tag: 'под ваш формат' },
];

export default function EventsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="ФОРМАТЫ"
          title={<>Пространство следует<br />за вашим сценарием</>}
          lead="Не ограничиваем событие готовым пакетом. Вы выбираете формат, зал и нужные дополнения — мы помогаем всё собрать."
          aside="Личные события · съёмки · бизнес"
        />

        <section className="event-list shell">
          {events.map((event) => (
            <article className="event-row" key={event.title}>
              <div className="event-row__image"><img src={assetPath(`/images/${event.image}`)} alt="" /></div>
              <div className="event-row__content">
                <span>{event.tag}</span>
                <h2>{event.title}</h2>
                <p>{event.text}</p>
              </div>
              <ArrowDownRight className="event-row__arrow" size={26} strokeWidth={1.3} />
            </article>
          ))}
        </section>

        <section className="event-note shell">
          <p className="eyebrow">НЕ НАШЛИ СВОЙ ФОРМАТ?</p>
          <p>Пространство подходит для лекций, йоги, воркшопов, презентаций, выпускных и любых камерных событий. Расскажите идею — найдём решение.</p>
        </section>

        <BookingCta />
      </main>
      <SiteFooter />
    </>
  );
}
