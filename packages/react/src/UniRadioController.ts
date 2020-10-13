import {
  UniRadioController as UniRadioControllerCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElements([
    UniRadioControllerCls
  ]);
}

export const UniRadioController = /*#__PURE__*/createReactComponent('uni-radio-controller');
