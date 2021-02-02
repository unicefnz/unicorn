import { UniOutsideClick as UniOutsideClickCls } from '@unicorndesign/core/dist/components/uni-outside-click';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElement(UniOutsideClickCls);
}

export const UniOutsideClick = /*#__PURE__*/createReactComponent('uni-outside-click');
