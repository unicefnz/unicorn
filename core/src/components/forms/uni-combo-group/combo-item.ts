import { ComponentInterface } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

interface ComboItemComponentInterface extends ComponentInterface {
  selected: boolean;
  disabled?: boolean;
  value: string | number;
  setFocus(ev: Event): Promise<void>;
}

export interface ComboItemElement extends HTMLStencilElement {
  selected: boolean;
  disabled?: boolean;
  value: string | number;
  setFocus(ev: Event): Promise<void>;
}

export default ComboItemComponentInterface;
