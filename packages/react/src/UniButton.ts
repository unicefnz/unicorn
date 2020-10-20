import { UniButton as UniButtonCls } from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElement(UniButtonCls);
}

export const UniButton = /*#__PURE__*/createReactComponent('uni-button');
