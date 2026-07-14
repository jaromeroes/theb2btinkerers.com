import { defaultLang, type Lang } from './config';

/** Detect the active language from a URL pathname (`/es/...` → es, else en). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  return seg === 'es' ? 'es' : 'en';
}

/**
 * Turn an EN canonical path into the equivalent path for `lang`.
 * `/about` → en: `/about`, es: `/es/about`.  `/` → es: `/es/`.
 * Does NOT apply to blog posts (translated slugs) — those pass explicit alternates.
 */
export function localizePath(enPath: string, lang: Lang): string {
  if (lang === 'en') return enPath;
  if (enPath === '/') return '/es/';
  return `/es${enPath}`;
}

/** Build the { en, es } alternate map for a simple mirrored page. */
export function mirrorAlternates(enPath: string): { en: string; es: string } {
  return { en: enPath, es: localizePath(enPath, 'es') };
}

/** Strip a leading `/es` from a path, returning the EN-canonical path. */
export function toCanonicalPath(path: string): string {
  if (path === '/es' || path === '/es/') return '/';
  if (path.startsWith('/es/')) return path.slice(3);
  return path;
}

export { defaultLang };
export type { Lang };
