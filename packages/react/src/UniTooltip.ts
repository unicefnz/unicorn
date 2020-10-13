import {
  UniTooltip as UniTooltipCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElements([
    UniTooltipCls
  ]);
}

export const UniTooltip = /*#__PURE__*/createReactComponent('uni-tooltip');
