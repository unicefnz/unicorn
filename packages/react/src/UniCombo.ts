import {
  UniComboGroup as UniComboGroupCls,
  UniComboItem as UniComboItemCls,
  UniComboText as UniComboTextCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';
import './UniRadioController';

defineElements([
  UniComboGroupCls,
  UniComboItemCls,
  UniComboTextCls
]);

export const UniComboGroup = /*@__PURE__*/createReactComponent('uni-combo-group');
export const UniComboItem = /*@__PURE__*/createReactComponent('uni-combo-item');
export const UniComboText = /*@__PURE__*/createReactComponent('uni-combo-text');
