import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';
import astroI18next from 'astro-i18next';

export default defineConfig({
  site: 'https://www.asvpa.org',
  // Only use base path in production - always end with /
  trailingSlash: 'ignore',
  integrations: [vue(), astroI18next()],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
