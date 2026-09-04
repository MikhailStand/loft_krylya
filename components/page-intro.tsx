import type { ReactNode } from 'react';

export function PageIntro({ eyebrow, title, lead, aside }: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  aside?: string;
}) {
  return (
    <section className="page-intro shell" data-decor={eyebrow}>
      <div className="page-intro__title">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      <div className="page-intro__lead">
        <span className="page-intro__mark" aria-hidden="true">К</span>
        <p>{lead}</p>
        {aside && <small>{aside}</small>}
      </div>
    </section>
  );
}
