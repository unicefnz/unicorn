import { UniTooltip as UniTooltipCls } from '@unicorndesign/core/dist/components/uni-tooltip';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElement(UniTooltipCls);
}

export const UniTooltip = /*#__PURE__*/createReactComponent('uni-tooltip');
