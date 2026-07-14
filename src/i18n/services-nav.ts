import type { Lang } from './config';

// Service page slugs are identical across languages (EN URLs preserved, ES mirrors under /es/).
// Only the labels are translated. This is the single source of truth for the nav dropdown,
// the footer column and the homepage/services grid ordering.
export const serviceSlugs = [
  'marketing-audit',
  'ai-strategy',
  'brand-strategy',
  'go-to-market',
  'marketing-plan',
  'fractional-cmo',
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

type NavLabels = { menu: string; footer: string };

export const serviceNav: Record<Lang, Record<ServiceSlug, NavLabels>> = {
  en: {
    'marketing-audit': { menu: 'Marketing Audit', footer: 'Marketing Audit' },
    'ai-strategy': { menu: 'AI & Hybrid Strategy', footer: 'AI Strategy' },
    'brand-strategy': { menu: 'Brand Strategy', footer: 'Brand Strategy' },
    'go-to-market': { menu: 'Go-To-Market Strategy', footer: 'Go-To-Market' },
    'marketing-plan': { menu: 'Marketing Plan', footer: 'Marketing Plan' },
    'fractional-cmo': { menu: 'Fractional CMO', footer: 'Fractional CMO' },
  },
  es: {
    'marketing-audit': { menu: 'Auditoría de marketing', footer: 'Auditoría de marketing' },
    'ai-strategy': { menu: 'Estrategia de IA e híbrida', footer: 'Estrategia de IA' },
    'brand-strategy': { menu: 'Estrategia de marca', footer: 'Estrategia de marca' },
    'go-to-market': { menu: 'Estrategia Go-To-Market', footer: 'Go-To-Market' },
    'marketing-plan': { menu: 'Plan de marketing', footer: 'Plan de marketing' },
    'fractional-cmo': { menu: 'CMO fraccional', footer: 'CMO fraccional' },
  },
};
