import { UniErrors as UniErrorsCls } from '@unicorndesign/core/dist/components/uni-errors';
import { createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';

defineElement(UniErrorsCls);

export const UniErrors = /*#__PURE__*/createReactComponent('uni-errors');
