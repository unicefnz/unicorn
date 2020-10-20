import {
  UniUnderline as UniUnderlineCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElement(UniUnderlineCls);
}

export const UniUnderline = /*#__PURE__*/createReactComponent('uni-underline');
