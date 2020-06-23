module.exports = {
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-actions',
    '@storybook/addon-knobs'
  ],
  stories: ['../src/**/*.stories.ts(|x)'],
  webpackFinal(config) {
    const jsRule = config.module.rules[0];
    const babelPresets = jsRule.use.find(l => l.loader === 'babel-loader').options.presets;
    const minifyPreset = babelPresets[1];
    minifyPreset[1].simplifyComparisons = false;

    return config;
  }
};
