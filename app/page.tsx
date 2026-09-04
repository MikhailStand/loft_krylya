/* oxlint-disable next/no-img-element */
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { HeroGallery } from '@/components/hero-gallery';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { assetPath, sitePath } from '@/lib/site';

const formats = [
  { title: 'Праздники', meta: 'Дни рождения · вечеринки', image: 'party-1.jpg' },
  { title: 'Детские события', meta: 'От первого года до выпускного', image: 'kids-1.jpg' },
  { title: 'Фото и видео', meta: 'Контент · каталоги · истории', image: 'photo-1.jpg' },
];

const trustPoints = [
  ['Уютная атмосфера', 'Гости особенно отмечают оформление студии и то, как по-разному залы выглядят в кадре.'],
  ['Внимание к детям', 'В отзывах благодарят за помощь с программой, анимацией и бережное отношение к маленьким гостям.'],
  ['Возвращаются снова', 'Студию выбирают для семейных фотосессий и праздников не один раз.'],
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow">LOFT КРЫЛЬЯ · КОРОЛЁВ</p>
            <h1 id="hero-title" className="hero-title">
              <span>Пространство</span>
              <span>для событий,</span>
              <span>которым нужны крылья</span>
            </h1>
            <p className="hero__lead">
              Два интерьерных зала для праздников, съёмок и встреч. Арендуйте
              один зал или всё пространство целиком.
            </p>
            <div className="hero__actions hero-quick-actions" aria-label="Быстрые ссылки">
              <a className="button button--secondary" href={sitePath('/prices/')}>Цены <ArrowRight size={17} /></a>
              <a className="button button--secondary" href={sitePath('/halls/')}>Залы <ArrowRight size={17} /></a>
              <a className="button button--secondary" href={sitePath('/events/')}>Форматы <ArrowRight size={17} /></a>
              <a className="button button--primary" href={sitePath('/contacts/#booking')}>Записаться <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero__location">
              <MapPin size={16} strokeWidth={1.7} />
              <span>Королёв, ул. Горького, 79 · бесплатная парковка</span>
            </div>
          </div>

          <HeroGallery />
        </section>

        <section className="about-section shell" aria-labelledby="about-title">
          <div className="about-section__image">
            <img src={assetPath('/images/light-2.jpg')} alt="Интерьер студии LOFT Крылья" />
          </div>
          <div className="about-section__copy">
            <p className="eyebrow">О СТУДИИ</p>
            <h2 id="about-title">Здесь легко<br />быть вместе</h2>
            <p>«Крылья» — камерная студия в Королёве, созданная для тёплых встреч, красивых кадров и событий без лишней суеты.</p>
            <p>Мы не навязываем готовый сценарий: помогаем выбрать зал, расставить мебель и собрать пространство именно под вашу идею.</p>
            <div className="about-section__note">Светлая атмосфера, два разных интерьера и внимательная команда рядом.</div>
            <a className="button button--secondary" href={sitePath('/halls/')}>Познакомиться с залами <ArrowUpRight size={18} /></a>
          </div>
        </section>

        <section className="section section--formats shell" data-decor="КРЫЛЬЯ">
          <div className="section-heading">
            <div>
              <p className="eyebrow">ЛЮБОЙ ПОВОД</p>
              <h2>Ваш сценарий.<br />Наше пространство.</h2>
            </div>
            <p>
              Лофт легко меняется под характер события — от нежной семейной
              съёмки до шумной вечеринки или камерной деловой встречи.
            </p>
          </div>

          <div className="format-grid">
            {formats.map((item) => (
              <a className="format-card" href={sitePath('/events/')} key={item.title}>
                <img src={assetPath(`/images/${item.image}`)} alt="" />
                <div className="format-card__copy">
                  <span>{item.meta}</span>
                  <h3>{item.title}</h3>
                </div>
                <ArrowUpRight className="format-card__arrow" size={21} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </section>

        <section className="trust-section shell" aria-labelledby="trust-title" data-decor="5.0">
          <div className="trust-section__heading">
            <div>
              <p className="eyebrow">НАМ ДОВЕРЯЮТ</p>
              <h2 id="trust-title">Место, куда<br />хочется вернуться</h2>
            </div>
            <a href="https://yandex.ru/maps/org/loft_krilya/234746468615/reviews/" target="_blank" rel="noreferrer" className="rating-card" aria-label="Отзывы LOFT Крылья на Яндекс Картах">
              <strong>5.0</strong>
              <span>★★★★★</span>
              <small>315 оценок на Яндекс Картах <ArrowUpRight size={12} /></small>
            </a>
          </div>
          <div className="trust-grid">
            {trustPoints.map(([title, text]) => (
              <article className="trust-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-message shell">
          <div className="split-message__light" data-decor="СВЕТ" style={{ backgroundImage: `url(${assetPath('/images/light-4.jpg')})` }}>
            <p className="eyebrow">СВЕТ</p>
            <h2>Воздух,<br />мягкость,<br />естественный свет.</h2>
          </div>
          <div className="split-message__dark" data-decor="ХАРАКТЕР" style={{ backgroundImage: `url(${assetPath('/images/dark-3.jpg')})` }}>
            <p className="eyebrow">ХАРАКТЕР</p>
            <h2>Кирпич,<br />графит,<br />атмосфера.</h2>
          </div>
          <a className="button button--light split-message__link" href={sitePath('/halls/')}>
            Сравнить залы <ArrowUpRight size={18} />
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
