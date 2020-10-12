import {
  UniTextField as UniTextFieldCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';
import './UniErrors';

defineElements([
  UniTextFieldCls
]);

export const UniTextField = /*@__PURE__*/createReactComponent('uni-text-field');
