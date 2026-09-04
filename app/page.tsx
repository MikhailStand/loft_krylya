/* oxlint-disable next/no-img-element */
import { ArrowUpRight, ChefHat, MapPin, UsersRound } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { assetPath, sitePath } from '@/lib/site';

const formats = [
  { title: 'Праздники', meta: 'Дни рождения · вечеринки', image: 'party-1.jpg' },
  { title: 'Детские события', meta: 'От первого года до выпускного', image: 'kids-1.jpg' },
  { title: 'Фото и видео', meta: 'Контент · каталоги · истории', image: 'photo-1.jpg' },
];

const trustPoints = [
  ['01', 'Уютная атмосфера', 'Гости особенно отмечают оформление студии и то, как по-разному залы выглядят в кадре.'],
  ['02', 'Внимание к детям', 'В отзывах благодарят за помощь с программой, анимацией и бережное отношение к маленьким гостям.'],
  ['03', 'Возвращаются снова', 'Студию выбирают для семейных фотосессий и праздников не один раз.'],
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
            <div className="hero__actions">
              <a className="button button--primary" href={sitePath('/contacts/#booking')}>
                Проверить дату <ArrowUpRight size={17} strokeWidth={1.8} />
              </a>
              <a className="text-link" href={sitePath('/halls/')}>
                Посмотреть залы <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero__location">
              <MapPin size={16} strokeWidth={1.7} />
              <span>Королёв, ул. Горького, 79 · бесплатная парковка</span>
            </div>
          </div>

          <div className="hero__visual" aria-label="Светлый и тёмный залы">
            <figure className="hero-shot hero-shot--light">
              <img src={assetPath('/images/light-hero.jpg')} alt="Светлый зал LOFT Крылья" />
              <figcaption><span>01</span> Светлый зал</figcaption>
            </figure>
            <figure className="hero-shot hero-shot--dark">
              <img src={assetPath('/images/dark-hero.jpg')} alt="Тёмный зал LOFT Крылья" />
              <figcaption><span>02</span> Тёмный зал</figcaption>
            </figure>
            <div className="hero__stamp" aria-hidden="true">
              <svg className="hero__stamp-orbit" viewBox="0 0 120 120">
                <defs><path id="stamp-circle" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" /></defs>
                <text><textPath href="#stamp-circle">ДВА ЗАЛА · ОДНО ПРОСТРАНСТВО · </textPath></text>
              </svg>
              <strong>110</strong>
              <span>М²</span>
            </div>
          </div>
        </section>

        <section className="facts shell" aria-label="Основные преимущества">
          <div className="fact"><strong>110 м²</strong><span>всё пространство</span></div>
          <div className="fact"><strong>до 80</strong><span>гостей на фуршете</span></div>
          <div className="fact fact--icon"><UsersRound size={22} strokeWidth={1.5} /><span>До 35 посадочных мест</span></div>
          <div className="fact fact--icon"><ChefHat size={22} strokeWidth={1.5} /><span>Полноценная кухня</span></div>
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
              <small>315 оценок на Яндекс Картах ↗</small>
            </a>
          </div>
          <div className="trust-grid">
            {trustPoints.map(([number, title, text]) => (
              <article className="trust-card" key={number}>
                <span>{number}</span>
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
          <a className="split-message__link" href={sitePath('/halls/')}>
            Сравнить залы <ArrowUpRight size={18} />
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
