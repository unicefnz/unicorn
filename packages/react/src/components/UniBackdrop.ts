import {
  UniBackdrop as UniBackdropCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';

defineElements([
  UniBackdropCls
]);

export const UniBackdrop = /*@__PURE__*/createReactComponent('uni-backdrop');
