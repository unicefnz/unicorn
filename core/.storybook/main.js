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

    // Babel-minify causes lots of issues with Stencil, so disable it and rely on Terser
    babelPresets.splice(1, 1);

    return config;
  }
};
