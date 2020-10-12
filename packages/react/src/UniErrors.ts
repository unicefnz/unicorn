import {
  UniErrors as UniErrorsCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';

defineElements([
  UniErrorsCls
]);

export const UniErrors = /*@__PURE__*/createReactComponent('uni-errors');
