import { UniSelect as UniSelectCls } from '@unicorndesign/core/dist/components/uni-select';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElement(UniSelectCls);
}

export const UniSelect = /*#__PURE__*/createReactComponent('uni-select');
