import {
  UniCheckbox as UniCheckboxCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElements([
    UniCheckboxCls
  ]);
}

export const UniCheckbox = /*#__PURE__*/createReactComponent('uni-checkbox');
