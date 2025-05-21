import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.node, // Node.js globals
        ...globals.browser, // Browser globals (optional)
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      // Add any other custom rules here
    },
  },
  eslintPluginPrettier, // Enables Prettier as an ESLint rule
  eslintConfigPrettier, // Disables conflicting ESLint rules
];
