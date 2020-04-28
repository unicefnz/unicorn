const path = require('path');
const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const OUTPUT_DIR = '../dist';
const PROJECT_NAME = 'uniform-components';

module.exports = {
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs'
  ],
  stories: ['../src/**/*.stories.ts(|x)'],
  async webpackFinal(config) {
    // Configure storybook to play nice with stencil

    config.entry.push(path.join(__dirname, OUTPUT_DIR, `${PROJECT_NAME}.js`));
    fs.readdirSync(path.join(__dirname, OUTPUT_DIR, 'collection/components')).map(file => {
      const jsFilePath = path.join(__dirname, OUTPUT_DIR, `collection/components/${file}/${file}.js`);
      try {
        if (fs.existsSync(jsFilePath)) {
          config.entry.push(jsFilePath);
        }
      } catch (err) {
        console.error(err);
      }

      // Add CSS
      let cssFilePath = path.join(
        __dirname,
        OUTPUT_DIR,
        `collection/components/${file}/${file}.css`
      );
      try {
        if (fs.existsSync(cssFilePath)) {
          config.entry.push(cssFilePath);
        }
      } catch (err) {
        console.error(err);
      }
    });

    // Add all static files to Storybook
    config.plugins.push(
      new CopyPlugin([
        {
          from: '**/*',
          to: './',
          context: 'dist',
        },
      ]),

    );

    // Write the files to disk and not to memory
    config.plugins.push(new WriteFilePlugin(), new ForkTsCheckerWebpackPlugin());

    // Manual Typescript support
    config.module.rules.push({
      test: /\.tsx?$/,
      loader: 'ts-loader',
      options: {
        // disable type checker - we will use it in fork plugin
        transpileOnly: true
      }
    });
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  }
};
