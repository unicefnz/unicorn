import {
  UniOutsideClick as UniOutsideClickCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElements([
    UniOutsideClickCls
  ]);
}

export const UniOutsideClick = /*#__PURE__*/createReactComponent('uni-outside-click');
