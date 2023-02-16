module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  plugins: ['react', 'jest'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
  },
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
  },
}
