import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'Unicorn',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements-bundle'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'docs-vscode',
      file: 'dist/element-metadata.json',
      sourceCodeBaseUrl: 'https://github.com/unicef-new-zealand/unicorn/tree/master/core/',
    },
  ],
  plugins: [
    sass()
  ]
};
