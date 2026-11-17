import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const galleries = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/galleries' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date().optional(),
      cover: image(),
      coverAlt: z.string().optional().default(''),
      photos: z
        .array(
          z.object({
            image: image(),
            alt: z.string().optional().default(''),
            caption: z.string().optional().default(''),
          })
        )
        .default([]),
    }),
});

export const collections = { galleries };
