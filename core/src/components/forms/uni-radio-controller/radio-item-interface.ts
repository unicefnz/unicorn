import { ComponentInterface } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

interface RadioItemInterface extends ComponentInterface {
  selected: boolean;
  value: string;
}

export interface HTMLUniRadioItemElement extends HTMLStencilElement {
  selected: boolean;
  value: string;
}

export default RadioItemInterface;
