import type { Metadata } from 'next';
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react';
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
          lead="Напишите дату, формат и количество гостей. Администратор уточнит свободное время и вернётся с расчётом."
          aside="Обычно отвечаем в течение рабочего дня"
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

          <form className="booking-form" action="mailto:loft_krilya@mail.ru" method="post" encType="text/plain">
            <div className="booking-form__heading">
              <h2>Проверить дату</h2>
            </div>
            <div className="booking-form__grid">
              <label><span>Ваше имя</span><input name="name" type="text" placeholder="Как к вам обращаться?" required /></label>
              <label><span>Телефон</span><input name="phone" type="tel" placeholder="+7 999 000-00-00" required /></label>
              <label><span>Дата</span><input name="date" type="date" /></label>
              <label><span>Количество гостей</span><input name="guests" type="number" min="1" placeholder="Например, 25" /></label>
              <label className="booking-form__wide">
                <span>Формат</span>
                <select name="format" defaultValue="">
                  <option value="" disabled>Выберите формат</option>
                  <option>Праздник / день рождения</option>
                  <option>Детское событие</option>
                  <option>Фото- или видеосъёмка</option>
                  <option>Свадьба / девичник</option>
                  <option>Корпоратив / мастер-класс</option>
                  <option>Другое</option>
                </select>
              </label>
              <label className="booking-form__wide"><span>Расскажите об идее</span><textarea name="message" rows={4} placeholder="Что планируете и какой зал понравился?" /></label>
            </div>
            <button className="button button--primary" type="submit">Отправить заявку <ArrowUpRight size={18} /></button>
            <small className="booking-form__note">Нажимая кнопку, вы соглашаетесь на обработку контактных данных.</small>
          </form>
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
