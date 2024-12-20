import type { Config } from 'tailwindcss';
import { fontFamily as defaultFontFamily } from 'tailwindcss/defaultTheme';
import preline from 'preline/plugin';

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultFontFamily.sans],
      },
    },
  },
  plugins: [preline],
} satisfies Config;
