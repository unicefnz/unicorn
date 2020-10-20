import {
  UniOutsideClick as UniOutsideClickCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElement(UniOutsideClickCls);
}

export const UniOutsideClick = /*#__PURE__*/createReactComponent('uni-outside-click');
