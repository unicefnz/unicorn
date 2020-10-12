import {
  UniUnderline as UniUnderlineCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';

defineElements([
  UniUnderlineCls
]);

export const UniUnderline = /*@__PURE__*/createReactComponent('uni-underline');
