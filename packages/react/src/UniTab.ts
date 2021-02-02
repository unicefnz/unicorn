import { UniTabs as UniTabsCls } from '@unicorndesign/core/dist/components/uni-tabs';
import { UniTab as UniTabCls } from '@unicorndesign/core/dist/components/uni-tab';
import { UniTabContent as UniTabContentCls } from '@unicorndesign/core/dist/components/uni-tab-content';
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
