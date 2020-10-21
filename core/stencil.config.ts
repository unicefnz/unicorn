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
      type: 'dist-custom-elements-bundle',
      externalRuntime: false
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'docs-vscode',
      file: 'dist/element-metadata.json',
      sourceCodeBaseUrl: 'https://github.com/unicefnz/unicorn/tree/master/core/',
    },
  ],
  plugins: [
    sass()
  ],
  extras: {
    shadowDomShim: true,
    safari10: true,
    appendChildSlotFix: false,
    cloneNodeFix: false,
    slotChildNodesFix: true,
  }
};
