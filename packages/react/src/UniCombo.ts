import { UniComboGroup as UniComboGroupCls } from '@unicorndesign/core/dist/components/uni-combo-group';
import { UniComboItem as UniComboItemCls } from '@unicorndesign/core/dist/components/uni-combo-item';
import { UniComboText as UniComboTextCls } from '@unicorndesign/core/dist/components/uni-combo-text';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  [
    UniComboGroupCls,
    UniComboItemCls,
    UniComboTextCls
  ].map(defineElement);
}

export const UniComboGroup = /*#__PURE__*/createReactComponent('uni-combo-group');
export const UniComboItem = /*#__PURE__*/createReactComponent('uni-combo-item');
export const UniComboText = /*#__PURE__*/createReactComponent('uni-combo-text');
