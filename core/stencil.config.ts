import { Config } from '@stencil/core';
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: 'uniform-components',
  // globalStyle: 'src/css/themes/unicef.scss',
  excludeSrc: ['**/test/**', '**/*.stories.tsx', '**/*.stories.ts'], // Try to stop stencil from compiling stories
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass()
  ]
};
