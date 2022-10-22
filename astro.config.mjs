import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), image()]
});