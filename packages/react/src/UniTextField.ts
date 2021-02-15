import { UniTextField as UniTextFieldCls } from '@unicorndesign/core/dist/components/uni-text-field';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';
import './UniErrors';

defineElement(UniTextFieldCls);

export const UniTextField = /*#__PURE__*/createReactComponent('uni-text-field');
