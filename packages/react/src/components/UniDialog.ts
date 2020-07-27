import { dialogController } from '@unicef-new-zealand/uniform-core';

import { createOverlayComponent } from './utils';

export interface DialogOptions {
  backdropDismiss?: boolean;
  keyboardClose?: boolean;
}

export const UniDialog = /*@__PURE__*/createOverlayComponent<DialogOptions, HTMLUniDialogElement>('UniDialog', dialogController);