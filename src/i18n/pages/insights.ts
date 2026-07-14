import type { Lang } from '../config';

export const insights: Record<Lang, {
  seo: { title: string; description: string };
  hero: { kick: string; h1a: string; h1accent: string; sub: string };
  empty: { h: string; body: string };
  article: {
    back: string;
    author: string;
    tocLabel: string;
    tocCtaText: string;
    tocCtaBtn: string;
    shareLabel: string;
    shareLinkedin: string;
    shareCopy: string;
    related: string;
    allArticles: string;
    minRead: string; // fallback read-time label, e.g. "5 min"
  };
}> = {
  en: {
    seo: {
      title: 'Insights',
      description: "Strategy, alignment, GTM, AI, and the things most B2B consultancies won't admit out loud.",
    },
    hero: {
      kick: 'Insights',
      h1a: "What we know. What we've learned. What we ",
      h1accent: "won't say in a sales pitch.",
      sub: "Strategy, alignment, GTM, AI, and the things most B2B consultancies won't admit out loud.",
    },
    empty: {
      h: 'Articles coming soon.',
      body: "We're writing the first batch now. No filler, no SEO fluff, just the honest thinking we wish we'd read earlier.",
    },
    article: {
      back: '← Back to Insights',
      author: 'The B2B Tinkerers',
      tocLabel: 'In this article',
      tocCtaText: "Recognise your company in this? Let's talk.",
      tocCtaBtn: "Let's talk →",
      shareLabel: 'Share:',
      shareLinkedin: 'LinkedIn',
      shareCopy: 'Copy link',
      related: 'Keep reading',
      allArticles: 'All articles →',
      minRead: '5 min',
    },
  },
  es: {
    seo: {
      title: 'Insights',
      description: 'Estrategia, alineación, GTM, IA y las cosas que la mayoría de consultoras B2B no admite en voz alta.',
    },
    hero: {
      kick: 'Insights',
      h1a: 'Lo que sabemos. Lo que hemos aprendido. Lo que ',
      h1accent: 'no diríamos en un pitch de ventas.',
      sub: 'Estrategia, alineación, GTM, IA y las cosas que la mayoría de consultoras B2B no admite en voz alta.',
    },
    empty: {
      h: 'Artículos muy pronto.',
      body: 'Estamos escribiendo la primera tanda. Sin relleno ni paja para SEO, solo el pensamiento honesto que nos habría gustado leer antes.',
    },
    article: {
      back: '← Volver a Insights',
      author: 'The B2B Tinkerers',
      tocLabel: 'En este artículo',
      tocCtaText: '¿Reconoces a tu empresa en esto? Hablemos.',
      tocCtaBtn: 'Hablemos →',
      shareLabel: 'Compartir:',
      shareLinkedin: 'LinkedIn',
      shareCopy: 'Copiar enlace',
      related: 'Sigue leyendo',
      allArticles: 'Todos los artículos →',
      minRead: '5 min',
    },
  },
};

// Date locale + format helpers per language.
export const dateLocale: Record<Lang, string> = { en: 'en-GB', es: 'es-ES' };

export function fmtLongDate(d: Date, lang: Lang): string {
  return d.toLocaleDateString(dateLocale[lang], { day: 'numeric', month: 'long', year: 'numeric' });
}
export function fmtShortDate(d: Date, lang: Lang): string {
  return d.toLocaleDateString(dateLocale[lang], { month: 'short', year: 'numeric' });
}
