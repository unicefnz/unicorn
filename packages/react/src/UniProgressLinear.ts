import {
  UniProgressLinear as UniProgressLinearCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';

defineElements([
  UniProgressLinearCls
]);

export const UniProgressLinear = /*@__PURE__*/createReactComponent('uni-progress-linear');
