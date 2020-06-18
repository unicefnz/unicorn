module.exports = {
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-actions',
    '@storybook/addon-info',
    '@storybook/addon-knobs'
  ],
  stories: ['../src/**/*.stories.ts(|x)']
};
