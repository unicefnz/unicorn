import { defineCustomElements } from '@unicef-new-zealand/uniform-core/loader';

import UniButton from './components/UniButton';
import UniBarText from './components/UniBarText';
import UniHero from './components/UniHero';
import UniTagline from './components/UniTagline';

export {
  UniBarText,
  UniButton,
  UniHero,
  UniTagline
};

defineCustomElements(window).then(() => console.log(
  '%c[uniform] %cUniform Loaded', 'font-weight: bold', 'font-weight: normal'
));
