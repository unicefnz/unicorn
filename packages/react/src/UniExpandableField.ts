import {
  UniExpandableField as UniExpandableFieldCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';
import './UniErrors';
import './UniOutsideClick';

if (typeof window === 'object' && typeof window.customElements === 'object') {
  defineElement(UniExpandableFieldCls);
}

export const UniExpandableField = /*#__PURE__*/createReactComponent('uni-expandable-field');
