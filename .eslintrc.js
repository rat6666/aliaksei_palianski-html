module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 0,
    'no-useless-constructor': 0,
    'no-return-assign': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'prettier/prettier': 0,
    'class-methods-use-this': 0,
    'no-plusplus': 0,
  },
};
