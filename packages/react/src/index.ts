import { defineCustomElements } from '@unicef-new-zealand/uniform-core/loader';

export * from './components/simple-components';

defineCustomElements(window).then(() => console.log(
  '%c[uniform] %cUniform Loaded', 'font-weight: bold', 'font-weight: normal'
));
