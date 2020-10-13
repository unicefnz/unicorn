import {
  UniSelect as UniSelectCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElements([
    UniSelectCls
  ]);
}

export const UniSelect = /*#__PURE__*/createReactComponent('uni-select');
