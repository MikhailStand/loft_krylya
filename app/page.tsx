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

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow">LOFT КРЫЛЬЯ · КОРОЛЁВ</p>
            <h1 id="hero-title">Пространство для событий, которым нужны крылья</h1>
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
              <span>2 ЗАЛА</span>
              <strong>110</strong>
              <span>М² ВМЕСТЕ</span>
            </div>
          </div>
        </section>

        <section className="facts shell" aria-label="Основные преимущества">
          <div className="fact"><strong>110 м²</strong><span>всё пространство</span></div>
          <div className="fact"><strong>до 80</strong><span>гостей на фуршете</span></div>
          <div className="fact fact--icon"><UsersRound size={22} strokeWidth={1.5} /><span>До 35 посадочных мест</span></div>
          <div className="fact fact--icon"><ChefHat size={22} strokeWidth={1.5} /><span>Полноценная кухня</span></div>
        </section>

        <section className="section shell">
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
            {formats.map((item, index) => (
              <a className="format-card" href={sitePath('/events/')} key={item.title}>
                <img src={assetPath(`/images/${item.image}`)} alt="" />
                <span className="format-card__number">0{index + 1}</span>
                <div className="format-card__copy">
                  <span>{item.meta}</span>
                  <h3>{item.title}</h3>
                </div>
                <ArrowUpRight className="format-card__arrow" size={21} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </section>

        <section className="split-message shell">
          <div className="split-message__light" style={{ backgroundImage: `url(${assetPath('/images/light-hero.jpg')})` }}>
            <p className="eyebrow">СВЕТ</p>
            <h2>Воздух,<br />мягкость,<br />естественный свет.</h2>
          </div>
          <div className="split-message__dark" style={{ backgroundImage: `url(${assetPath('/images/dark-hero.jpg')})` }}>
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
