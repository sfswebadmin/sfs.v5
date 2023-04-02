import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'http://www.swindonfilm.org.uk',
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/asset.[hash][extname]',
        },
      },
    },
  },
  integrations: [mdx()]
});