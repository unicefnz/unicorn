import { UniErrors as UniErrorsCls } from '@unicorndesign/core/dist/components/uni-errors';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElement(UniErrorsCls);
}

export const UniErrors = /*#__PURE__*/createReactComponent('uni-errors');
