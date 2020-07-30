import '!style-loader!css-loader!sass-loader!../src/css/prebuilt/unicef.scss';
import { setCustomElements } from '@storybook/web-components';
import { defineCustomElements } from '../dist/esm/loader';
import docs from '../dist/custom-elements.json';

setCustomElements(docs);

if (typeof window.customElements === 'undefined') {
  import('../dist/esm/polyfills')
    .then(({ applyPolyfills }) => applyPolyfills())
    .then(() => defineCustomElements());
} else defineCustomElements();
