/* oxlint-disable next/no-img-element */
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { BookingCta } from '@/components/booking-cta';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { assetPath, sitePath } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Залы',
  description: 'Светлый и тёмный интерьерные залы LOFT Крылья в Королёве.',
};
export const dynamic = 'force-static';

const hallDetails = [
  {
    id: 'light',
    title: 'Светлый зал',
    tagline: 'Воздух и естественный свет',
    description: 'Спокойный интерьер для семейных историй, детских праздников, камерных свадеб и светлого контента.',
    image: 'light-hero.jpg',
    gallery: ['light-2.jpg', 'light-3.jpg'],
    features: ['55 м²', 'Панорамные окна', 'Высота потолков 4 м', 'Светлые фактурные стены'],
  },
  {
    id: 'dark',
    title: 'Тёмный зал',
    tagline: 'Фактура и характер',
    description: 'Красный кирпич, бетон, графитовая стена, барная стойка и полноценная кухня для атмосферных событий.',
    image: 'dark-hero.jpg',
    gallery: ['dark-2.jpg', 'dark-4.jpg'],
    features: ['55 м²', 'Полноценная кухня', 'Барная стойка', 'Кирпич и графит'],
  },
];

export default function HallsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="ДВА НАСТРОЕНИЯ"
          title={<>Свет или характер.<br />Можно не выбирать.</>}
          lead="Каждый зал работает самостоятельно, а большая амбарная дверь объединяет их в единое пространство площадью 110 м²."
          aside="Один зал · два зала · всё пространство"
        />

        <section className="hall-switch shell" aria-label="Быстрый выбор зала">
          {hallDetails.map((hall) => (
            <a href={`#${hall.id}`} key={hall.id}>
              <strong>{hall.title}</strong>
              <small>{hall.tagline}</small>
              <ArrowUpRight size={18} />
            </a>
          ))}
        </section>

        {hallDetails.map((hall) => (
          <section className={`hall-detail hall-detail--${hall.id} shell`} id={hall.id} key={hall.id}>
            <div className="hall-detail__hero">
              <img src={assetPath(`/images/${hall.image}`)} alt={`${hall.title} LOFT Крылья`} />
            </div>
            <div className="hall-detail__content">
              <p className="eyebrow">{hall.tagline}</p>
              <h2>{hall.title}</h2>
              <p className="hall-detail__description">{hall.description}</p>
              <ul>
                {hall.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <a className="button button--secondary" href={sitePath('/contacts/#booking')}>Узнать свободное время <ArrowUpRight size={17} /></a>
            </div>
            <div className="hall-detail__gallery">
              {hall.gallery.map((image, index) => (
                <img src={assetPath(`/images/${image}`)} alt={`${hall.title}, ракурс ${index + 2}`} key={image} />
              ))}
            </div>
          </section>
        ))}

        <BookingCta title="Выберите настроение вашего события" />
      </main>
      <SiteFooter />
    </>
  );
}
