import type { Metadata } from 'next';
import { ArrowUpRight, Check, Clock3, Mail, MapPin, Phone, PhoneCall } from 'lucide-react';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Связаться с LOFT Крылья и проверить свободную дату.',
};
export const dynamic = 'force-static';

export default function ContactsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="КОНТАКТЫ"
          title={<>Давайте обсудим<br />ваше событие</>}
          lead="Позвоните администратору — вместе проверим дату, выберем зал и уточним стоимость вашего события."
          aside="Студия работает по предварительной записи"
        />

        <section className="contact-layout shell" id="booking">
          <div className="contact-card">
            <p className="eyebrow">LOFT КРЫЛЬЯ</p>
            <h2>Мы на связи</h2>
            <div className="contact-card__links">
              <a href="tel:+79260463955"><Phone size={19} /> <span><small>Телефон</small>+7 926 046-39-55</span></a>
              <a href="mailto:loft_krilya@mail.ru"><Mail size={19} /> <span><small>Почта</small>loft_krilya@mail.ru</span></a>
              <span><MapPin size={19} /> <span><small>Адрес</small>Королёв, ул. Горького, 79, корп. 13</span></span>
              <span><Clock3 size={19} /> <span><small>Режим работы</small>По предварительной записи</span></span>
            </div>
            <a className="button button--secondary" href="https://yandex.ru/maps/?text=Королёв%2C%20улица%20Горького%2C%2079%2C%20корпус%2013" target="_blank" rel="noreferrer">
              Построить маршрут <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="availability-call">
            <div className="availability-call__heading">
              <p className="eyebrow">ПРОВЕРИТЬ ДАТУ</p>
              <h2>Позвоните<br />администратору</h2>
              <p>Так вы сразу узнаете, свободна ли нужная дата, и получите ответы по залам и стоимости.</p>
            </div>
            <a className="availability-call__button" href="tel:+79260463955">
              <span><PhoneCall size={24} /> Позвонить</span>
              <strong>+7 926 046-39-55</strong>
              <ArrowUpRight size={22} />
            </a>
            <div className="availability-call__memo">
              <p>Что желательно уточнить перед звонком</p>
              <ul>
                <li><Check size={17} />Желаемую дату и время</li>
                <li><Check size={17} />Формат события</li>
                <li><Check size={17} />Примерное количество гостей</li>
                <li><Check size={17} />Один зал или всё пространство</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="route-card shell">
          <div className="route-card__map" aria-hidden="true">
            <span className="route-card__road route-card__road--one" />
            <span className="route-card__road route-card__road--two" />
            <span className="route-card__pin"><MapPin size={22} /></span>
          </div>
          <div className="route-card__copy">
            <p className="eyebrow">КАК ДОБРАТЬСЯ</p>
            <h2>ЖК «Валентиновка парк»</h2>
            <p>Удобный подъезд на автомобиле, бесплатная парковка рядом со студией. От станции Валентиновка — около 10 минут пешком.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
