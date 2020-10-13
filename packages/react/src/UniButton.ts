import { UniButton as UniButtonCls } from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElements([
    UniButtonCls
  ]);
}

export const UniButton = /*#__PURE__*/createReactComponent('uni-button');
