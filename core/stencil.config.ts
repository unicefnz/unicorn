import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'Uniform',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'docs-vscode',
      file: 'dist/custom-elements.json',
      sourceCodeBaseUrl: 'https://github.com/unicef-new-zealand/uniform/tree/master/core/',
    },
  ],
  plugins: [
    sass()
  ]
};
