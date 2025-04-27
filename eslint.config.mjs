import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'

export default defineConfig({
  files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    globals: globals.browser
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    react: pluginReact
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    ...pluginReact.configs.flat.recommended.rules,
    '@typescript-eslint/ban-types': 'off', // Garante que a regra está desabilitada
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-wrapper-object-types': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
})
