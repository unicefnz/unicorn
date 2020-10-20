import {
  UniTagChip as UniTagChipCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElement(UniTagChipCls);
}

export const UniTagChip = /*#__PURE__*/createReactComponent('uni-tag-chip');
