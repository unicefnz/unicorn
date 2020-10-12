import {
  UniExpandableField as UniExpandableFieldCls
} from '@unicorndesign/core/dist/custom-elements';
import { createReactComponent } from './utils';
import { defineElements } from './utils/defineElements';
import './UniErrors';
import './UniOutsideClick';

defineElements([
  UniExpandableFieldCls
]);

export const UniExpandableField = /*@__PURE__*/createReactComponent('uni-expandable-field');
