import { UniSelect as UniSelectCls } from '@unicorndesign/core/dist/components/uni-select';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';

defineElement(UniSelectCls);

export const UniSelect = /*#__PURE__*/createReactComponent('uni-select');
