module.exports = {
  extends: [
    'plugin:@stencil/recommended',
    '@unicefnz/eslint-config/ts-react'
  ],
  rules: {
    'import/prefer-default-export': 0,
    'react/no-unknown-property': [2, { ignore: ['class'] }],
    '@stencil/strict-boolean-conditions': 0
  },
  settings: {
    react: {
      pragma: 'h'
    }
  },
  parserOptions: {
    project: './tsconfig.json'
  }
};
