// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@unicefnz/eslint-config/patch');

module.exports = {
  extends: [
    'plugin:@stencil/recommended',
    '@unicefnz/eslint-config/react'
  ],
  rules: {
    'react/no-unknown-property': [2, { ignore: ['class'] }],
    '@stencil/strict-boolean-conditions': 0
  },
  settings: {
    react: {
      pragma: 'h'
    }
  },
  parserOptions: {
    tsconfigRootDir: __dirname
  }
};
