import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import unusedImports from 'eslint-plugin-unused-imports';

export default defineConfig([
  globalIgnores([
    'dist',
    'node_modules',
    '.husky',
    'src/api/__generated__/**',
    'build',
    '.vite',
    '*.log',
    '.DS_Store',
    '.vscode',
    '.idea',
    'bun.lock',
    'package-lock.json',
    'yarn.lock',
    'pnpm-lock.yaml',
    'src/route-tree.gen.ts',
  ]),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      jsxA11y.flatConfigs.recommended,
      prettierConfig,
    ],
    plugins: {
      prettier,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'prettier/prettier': 'error',

      // Import sorting
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // Unused imports
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      // Console warnings
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // TypeScript specific
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: {
            constructors: 'no-public',
          },
        },
      ],

      // React specific
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    files: ['src/routes/**/*.{ts,tsx}'],
    rules: {
      // TanStack Router uses throw redirect() pattern which is not an Error
      '@typescript-eslint/only-throw-error': 'off',
    },
  },
]);
