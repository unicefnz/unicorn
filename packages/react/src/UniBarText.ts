import { UniBarText as UniBarTextCls } from '@unicorndesign/core/dist/components/uni-bar-text';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElement(UniBarTextCls);
}

export const UniBarText = /*#__PURE__*/createReactComponent('uni-bar-text');
