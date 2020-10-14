import {
  UniTagChip as UniTagChipCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElements([
    UniTagChipCls
  ]);
}

export const UniTagChip = /*#__PURE__*/createReactComponent('uni-tag-chip');