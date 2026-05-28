// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
// @ts-ignore
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  output: 'server',

  integrations: [react()],

  devToolbar: { enabled: false },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: isProduction ? cloudflare({
    imageService: 'passthrough',
  }) : undefined
});