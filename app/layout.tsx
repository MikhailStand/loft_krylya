import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'LOFT Крылья — пространство для событий в Королёве',
    template: '%s — LOFT Крылья',
  },
  description: 'Два интерьерных зала для праздников, съёмок и встреч. До 80 гостей, полноценная кухня, свет и звук.',
  openGraph: {
    title: 'LOFT Крылья — пространство для событий',
    description: 'Два интерьерных зала в Королёве для праздников, съёмок и встреч.',
    images: ['https://cdn-st2.vigbo.com/u31233/41375/blog/3332633/1641197/31489034/1000-2d2f7979d676759fb2531844c7644b5c.jpg'],
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
