import '!style-loader!css-loader!sass-loader!../src/css/prebuilt/unicef.scss';
import { applyPolyfills, defineCustomElements } from '../dist/esm/loader';

if (!window.customElements) applyPolyfills().then(() => defineCustomElements());
else defineCustomElements();
