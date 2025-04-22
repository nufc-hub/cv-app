import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // JavaScript base config
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: {
      js,
      prettier: pluginPrettier,
    },
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      ...js.configs.recommended.rules,
      'prettier/prettier': 'error', // Show Prettier issues as ESLint errors
    },
  },

  // React plugin config
  {
    files: ['**/*.{js,jsx}'],
    ...pluginReact.configs.flat.recommended,
  },

  // Prettier config (disables conflicting ESLint rules)
  prettierConfig,
]);
