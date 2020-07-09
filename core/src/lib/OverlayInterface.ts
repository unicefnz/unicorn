import { EventEmitter } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

export interface OverlayEventDetail<T = any> {
  data?: T;
  role?: string;
}

export interface OverlayInterface {
  el: HTMLElement;
  keyboardClose: boolean;
  overlayIndex: number;
  presented: boolean;

  willPresent: EventEmitter<void>;
  didPresent: EventEmitter<void>;
  willDismiss: EventEmitter<OverlayEventDetail>;
  didDismiss: EventEmitter<OverlayEventDetail>;

  present(): Promise<void>;
  dismiss(data?: any, role?: string): Promise<boolean>;
}

export interface OverlayController {
  create(opts?: any): Promise<HTMLElement>;
  dismiss(data?: any, role?: string, id?: string): Promise<boolean>;
  getTop(): Promise<HTMLUniOverlayElement | undefined>;
}

export interface HTMLUniOverlayElement extends HTMLStencilElement {
  overlayIndex: number;
  backdropDismiss?: boolean;

  dismiss(data?: any, role?: string): Promise<boolean>;
}
