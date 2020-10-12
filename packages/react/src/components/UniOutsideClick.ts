import {
  UniOutsideClick as UniOutsideClickCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';

defineElements([
  UniOutsideClickCls
]);

export const UniOutsideClick = /*@__PURE__*/createReactComponent('uni-outside-click');
