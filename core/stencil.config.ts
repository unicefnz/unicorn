import { Config } from '@stencil/core';
import { sass } from "@stencil/sass";
import { reactOutputTarget } from '@stencil/react-output-target';

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
      type: 'www',
      serviceWorker: null // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: '@unicef-new-zealand/uniform-core',
      proxiesFile: '../packages/react/src/proxies.ts',
    })
  ],
  plugins: [
    sass()
  ]
};
