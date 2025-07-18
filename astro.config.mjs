// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // ✅ Add this line

// https://astro.build/config
export default defineConfig({
    site: 'https://primotech-llc.com',
    integrations: [
        tailwind(),
        react(), // ✅ Add this line
    ],
});
