import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'eslint:recommended',
      'next/core-web-vitals',
      'next/typescript',
      'plugin:prettier/recommended',
    ],
    rules: {
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          endOfLine: 'auto',
        },
      ],
      'react/no-unescaped-entities': 'off',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
    },
  }),
];

export default eslintConfig;
