import { UniBackdrop as UniBackdropCls } from '@unicorndesign/core/dist/components/uni-backdrop';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';

defineElement(UniBackdropCls);

export const UniBackdrop = /*#__PURE__*/createReactComponent('uni-backdrop');
