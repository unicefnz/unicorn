import { defineCustomElements } from '@uniform/core/loader';
import Button from './Button';

export {
  Button
};

defineCustomElements(window).then(() => console.log(
  '%c[uniform] %cUniform Loaded', 'font-weight: bold', 'font-weight: normal'
));
