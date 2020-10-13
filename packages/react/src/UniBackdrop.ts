import {
  UniBackdrop as UniBackdropCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElements([
    UniBackdropCls
  ]);
}

export const UniBackdrop = /*#__PURE__*/createReactComponent('uni-backdrop');
