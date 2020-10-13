import {
  UniErrors as UniErrorsCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElements([
    UniErrorsCls
  ]);
}

export const UniErrors = /*#__PURE__*/createReactComponent('uni-errors');
