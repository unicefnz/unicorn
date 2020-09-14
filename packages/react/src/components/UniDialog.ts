import { dialogController } from '@unicorndesign/core';

import { createOverlayComponent } from './utils';

export interface DialogOptions {
  backdropDismiss?: boolean;
  keyboardClose?: boolean;
}

export const UniDialog = /*@__PURE__*/createOverlayComponent<DialogOptions, HTMLUniDialogElement>('UniDialog', dialogController);
