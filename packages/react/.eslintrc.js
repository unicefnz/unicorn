// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@unicefnz/eslint-config/patch');

module.exports = {
  extends: [
    '@unicefnz/eslint-config/react'
  ],
  parserOptions: {
    tsconfigRootDir: __dirname
  }
};
