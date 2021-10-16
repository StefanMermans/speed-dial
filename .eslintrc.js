/* eslint-disable */

module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'warn',
    'react-hooks/exhaustive-deps': 'warn',

    'no-unused-vars': 'off',

    '@typescript-eslint/no-unused-vars': ['warn'],

    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  globals: {
    process: false,
  },
};
