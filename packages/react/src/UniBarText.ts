import {
  UniBarText as UniBarTextCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElements([
    UniBarTextCls
  ]);
}

export const UniBarText = /*#__PURE__*/createReactComponent('uni-bar-text');
