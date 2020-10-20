import {
  UniBackdrop as UniBackdropCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElement(UniBackdropCls);
}

export const UniBackdrop = /*#__PURE__*/createReactComponent('uni-backdrop');
