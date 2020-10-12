import {
  UniTooltip as UniTooltipCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';

defineElements([
  UniTooltipCls
]);

export const UniTooltip = /*@__PURE__*/createReactComponent('uni-tooltip');
