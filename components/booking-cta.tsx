import { ArrowUpRight } from 'lucide-react';
import { sitePath } from '@/lib/site';

export function BookingCta({ title = 'Расскажите, что вы задумали' }: { title?: string }) {
  return (
    <section className="booking-cta shell">
      <p className="eyebrow">СВОБОДНЫЕ ДАТЫ</p>
      <h2>{title}</h2>
      <p>Подскажем, какой зал подойдёт, рассчитаем стоимость и поможем с организацией.</p>
      <a className="button button--light booking-cta__button" href={sitePath('/contacts/#booking')}>
        Проверить дату <ArrowUpRight size={19} strokeWidth={1.6} />
      </a>
    </section>
  );
}
