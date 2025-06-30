const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  './node_modules/preline/preline.js',],
  
  theme: {
    extend: {
      
    },
  },
  plugins: [require('@tailwindcss/typography'),
],
};
