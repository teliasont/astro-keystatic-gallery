// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import node from '@astrojs/node';
import cloudflare from '@astrojs/cloudflare';
import keystatic from '@keystatic/astro';

import tailwindcss from '@tailwindcss/vite';

// `astro dev` runs on Node so Keystatic can edit files on disk.
// `astro build` targets Cloudflare Workers.
const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],

  // Pages are prerendered by default; the adapter serves the Keystatic
  // admin UI (/keystatic) and its API (/api/keystatic) on demand.
  adapter: isDev
    ? node({ mode: 'standalone' })
    : cloudflare({ imageService: 'compile' }),

  vite: {
    plugins: [tailwindcss()],
  },
});