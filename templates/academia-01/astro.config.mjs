import { defineConfig } from 'astro/config';

// BASE_PATH / SITE_URL are injected by scripts/build-all.mjs for GitHub Pages.
// When a client buys this template, they can simply set `site` to their domain.
export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH ?? '/',
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: true,
});
