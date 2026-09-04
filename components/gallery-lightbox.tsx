'use client';

/* oxlint-disable next/no-img-element */

import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { assetPath } from '@/lib/site';

type Photo = [image: string, label: string, modifier: string];

export function GalleryLightbox({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null);
      if (event.key === 'ArrowRight') setActive((active + 1) % photos.length);
      if (event.key === 'ArrowLeft') setActive((active - 1 + photos.length) % photos.length);
    };
    document.body.classList.add('lightbox-is-open');
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('lightbox-is-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [active, photos.length]);

  const show = (offset: number) => {
    if (active === null) return;
    setActive((active + offset + photos.length) % photos.length);
  };

  return (
    <>
      <section className="gallery-grid shell">
        {photos.map(([image, label, modifier], index) => (
          <figure className={`gallery-item ${modifier}`} key={image}>
            <button type="button" onClick={() => setActive(index)} aria-label={`Открыть фото: ${label}`}>
              <img src={assetPath(`/images/${image}`)} alt={label} />
            </button>
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </section>

      {active !== null && (
        <dialog open className="lightbox" aria-label={photos[active][1]}>
          <button className="lightbox__close" type="button" aria-label="Закрыть фотографию" onClick={() => setActive(null)}><X /></button>
          <button className="lightbox__nav lightbox__nav--prev" type="button" aria-label="Предыдущая фотография" onClick={() => show(-1)}><ChevronLeft /></button>
          <figure>
            <img src={assetPath(`/images/${photos[active][0]}`)} alt={photos[active][1]} />
            <figcaption>{photos[active][1]}</figcaption>
          </figure>
          <button className="lightbox__nav lightbox__nav--next" type="button" aria-label="Следующая фотография" onClick={() => show(1)}><ChevronRight /></button>
        </dialog>
      )}
    </>
  );
}
