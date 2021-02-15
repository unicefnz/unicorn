import { UniExpandableField as UniExpandableFieldCls } from '@unicorndesign/core/dist/components/uni-expandable-field';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';
import './UniErrors';
import './UniOutsideClick';

defineElement(UniExpandableFieldCls);

export const UniExpandableField = /*#__PURE__*/createReactComponent('uni-expandable-field');
