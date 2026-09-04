/* oxlint-disable next/no-img-element */
import type { Metadata } from 'next';
import { BookingCta } from '@/components/booking-cta';
import { GalleryLightbox } from '@/components/gallery-lightbox';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Галерея',
  description: 'Интерьеры и события в LOFT Крылья.',
};
export const dynamic = 'force-static';

const photos: [string, string, string][] = [
  ['light-hero.jpg', 'Светлый зал', 'gallery-item--wide'],
  ['dark-hero.jpg', 'Тёмный зал', 'gallery-item--tall'],
  ['kids-1.jpg', 'Детский праздник', ''],
  ['party-1.jpg', 'Вечеринка', ''],
  ['light-2.jpg', 'Светлый интерьер', 'gallery-item--tall'],
  ['dark-4.jpg', 'Фактурные стены', 'gallery-item--wide'],
  ['photo-1.jpg', 'Фотосессия', 'gallery-item--portrait'],
  ['kids-2.jpg', 'Семейное событие', ''],
  ['light-3.jpg', 'Пространство для встречи', ''],
  ['dark-2.jpg', 'Тёмный интерьер', 'gallery-item--wide'],
];

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="ГАЛЕРЕЯ"
          title={<>Смотрите не на стены.<br />Смотрите на возможности.</>}
          lead="Один и тот же интерьер звучит по-разному: спокойно утром, празднично вечером, камерно на встрече и выразительно в кадре."
          aside="Интерьеры · события · съёмки"
        />

        <GalleryLightbox photos={photos} />

        <BookingCta title="Представьте здесь своё событие" />
      </main>
      <SiteFooter />
    </>
  );
}
