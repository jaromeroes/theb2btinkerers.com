import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    tag: z.string(),
    readTime: z.string().optional(),
    image: image().optional(),
    // i18n
    lang: z.enum(['en', 'es']).default('en'),
    // Pairs the EN and ES versions of the same article (for hreflang + language switch).
    translationKey: z.string().optional(),
  }),
});

export const collections = { blog };
