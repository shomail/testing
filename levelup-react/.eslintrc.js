module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    'cypress/globals': true
  },
  settings: {
    ecmascript: 6,
    jsx: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react', 'eslint-plugin-cypress'],
  extends: ['airbnb', 'prettier'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'no-console': 0
  },
  globals: {
    test: true,
    expect: true,
    afterEach: true,
    jest: true
  }
};
