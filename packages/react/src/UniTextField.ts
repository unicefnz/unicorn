import {
  UniTextField as UniTextFieldCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';
import './UniErrors';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElement(UniTextFieldCls);
}

export const UniTextField = /*#__PURE__*/createReactComponent('uni-text-field');
