import { dialogController } from '@unicorndesign/core';
import {
  UniDialog as UniDialogCls,
  UniDialogActions as UniDialogActionsCls,
  UniDialogContent as UniDialogContentCls,
  UniDialogTitle as UniDialogTitleCls
} from '@unicorndesign/core/dist/custom-elements';
import { createOverlayComponent, createReactComponent } from './utils';
import { defineElement } from './utils/defineElement';
import './UniBackdrop';
import './UniUnderline';

export interface DialogOptions {
  backdropDismiss?: boolean;
  keyboardClose?: boolean;
}

if (typeof window === 'object' && typeof window.customElements === 'object') {
  [
    UniDialogCls,
    UniDialogActionsCls,
    UniDialogContentCls,
    UniDialogTitleCls
  ].map(defineElement);
}

export const UniDialog = /*#__PURE__*/createOverlayComponent<DialogOptions, HTMLUniDialogElement>('uni-dialog', dialogController);
export const UniDialogActions = /*#__PURE__*/createReactComponent('uni-dialog-actions');
export const UniDialogContent = /*#__PURE__*/createReactComponent('uni-dialog-content');
export const UniDialogTitle = /*#__PURE__*/createReactComponent('uni-dialog-title');
