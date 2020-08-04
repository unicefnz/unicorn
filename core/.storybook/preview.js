import '!style-loader!css-loader!sass-loader!../src/css/prebuilt/unicef.scss';
import { setCustomElements } from '@storybook/web-components';
import { defineCustomElements } from '../dist/esm/loader';

// import('../dist/custom-elements.json')
//   .then(({ default: docs }) => {
//     setCustomElements(docs)
//   })
//   .catch(e => console.error('Loading custom-elements.json failed:\n', e))
//

if (typeof window.customElements === 'undefined') {
  import('../dist/esm/polyfills')
    .then(({ applyPolyfills }) => applyPolyfills())
    .then(() => defineCustomElements());
} else defineCustomElements();
