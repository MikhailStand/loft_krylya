'use client';

/* oxlint-disable next/no-img-element */
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import { assetPath } from '@/lib/site';

const slides = [
  { image: 'light-hero.jpg', label: 'Светлый зал', alt: 'Светлый зал LOFT Крылья' },
  { image: 'dark-hero.jpg', label: 'Тёмный зал', alt: 'Тёмный зал LOFT Крылья' },
  { image: 'light-3.jpg', label: 'Пространство для вашего события', alt: 'Интерьер LOFT Крылья' },
];

export function HeroGallery() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [playing]);

  const show = (direction: number) => {
    setActive((current) => (current + direction + slides.length) % slides.length);
  };

  return (
    <section
      className="hero-gallery"
      aria-roledescription="карусель"
      aria-label="Интерьеры студии"
    >
      <div className="hero-gallery__track" style={{ transform: `translate3d(-${active * 100}%, 0, 0)` }}>
        {slides.map((slide, index) => (
          <figure className="hero-gallery__slide" aria-hidden={index !== active} key={slide.image}>
            <img src={assetPath(`/images/${slide.image}`)} alt={index === active ? slide.alt : ''} />
            <figcaption>{slide.label}</figcaption>
          </figure>
        ))}
      </div>

      <div className="hero-gallery__controls">
        <button type="button" onClick={() => show(-1)} aria-label="Предыдущая фотография"><ArrowLeft size={19} /></button>
        <button type="button" onClick={() => setPlaying((value) => !value)} aria-label={playing ? 'Остановить перелистывание' : 'Продолжить перелистывание'}>
          {playing ? <Pause size={17} /> : <Play size={17} />}
        </button>
        <button type="button" onClick={() => show(1)} aria-label="Следующая фотография"><ArrowRight size={19} /></button>
      </div>

      <div className="hero-gallery__dots" aria-label="Выбор фотографии">
        {slides.map((slide, index) => (
          <button
            className={index === active ? 'is-active' : undefined}
            type="button"
            aria-label={`Показать фотографию: ${slide.label}`}
            aria-current={index === active ? 'true' : undefined}
            onClick={() => setActive(index)}
            key={slide.image}
          />
        ))}
      </div>
    </section>
  );
}
