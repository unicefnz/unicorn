import {
  UniCheckbox as UniCheckboxCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElement(UniCheckboxCls);
}

export const UniCheckbox = /*#__PURE__*/createReactComponent('uni-checkbox');
