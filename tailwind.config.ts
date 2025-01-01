import type { Config } from 'tailwindcss';
import { fontFamily as defaultFontFamily } from 'tailwindcss/defaultTheme';
import preline from 'preline/plugin';
import vidstack from '@vidstack/react/tailwind.cjs';

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    container: {
      center: true,
      padding: '0.625rem',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultFontFamily.sans],
      },
    },
  },
  plugins: [preline, vidstack],
} satisfies Config;
