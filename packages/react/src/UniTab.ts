import {
  UniTabs as UniTabsCls,
  UniTab as UniTabCls,
  UniTabContent as UniTabContentCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  [
    UniTabsCls,
    UniTabCls,
    UniTabContentCls
  ].map(defineElement);
}

export const UniTabs = /*#__PURE__*/createReactComponent('uni-tabs');
export const UniTab = /*#__PURE__*/createReactComponent('uni-tab');
export const UniTabContent = /*#__PURE__*/createReactComponent('uni-tab-content');
