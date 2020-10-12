import { UniButton as UniButtonCls } from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';

defineElements([
  UniButtonCls
]);

export const UniButton = /*@__PURE__*/createReactComponent('uni-button');
