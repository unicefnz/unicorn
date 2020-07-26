import '!style-loader!css-loader!sass-loader!../src/css/prebuilt/unicef.scss';
import { defineCustomElements } from '../dist/esm/loader';

if (typeof window.customElements === 'undefined') {
  import('../dist/esm/polyfills')
    .then(({ applyPolyfills }) => applyPolyfills())
    .then(() => defineCustomElements());
} else defineCustomElements();
