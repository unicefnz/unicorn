import {
  UniProgressLinear as UniProgressLinearCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElement(UniProgressLinearCls);
}

export const UniProgressLinear = /*#__PURE__*/createReactComponent('uni-progress-linear');
