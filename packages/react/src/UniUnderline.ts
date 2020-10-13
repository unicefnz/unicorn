import {
  UniUnderline as UniUnderlineCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElements([
    UniUnderlineCls
  ]);
}

export const UniUnderline = /*#__PURE__*/createReactComponent('uni-underline');
