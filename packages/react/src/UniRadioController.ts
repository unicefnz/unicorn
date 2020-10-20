import {
  UniRadioController as UniRadioControllerCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElement(UniRadioControllerCls);
}

export const UniRadioController = /*#__PURE__*/createReactComponent('uni-radio-controller');
