import { UniButton as UniButtonCls } from '@unicorndesign/core/dist/components/uni-button';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';

defineElement(UniButtonCls);

export const UniButton = /*#__PURE__*/createReactComponent('uni-button');
