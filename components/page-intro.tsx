import type { ReactNode } from 'react';

export function PageIntro({ eyebrow, title, lead, aside }: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  aside?: string;
}) {
  return (
    <section className="page-intro shell">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      <div className="page-intro__lead">
        <p>{lead}</p>
        {aside && <span>{aside}</span>}
      </div>
    </section>
  );
}
