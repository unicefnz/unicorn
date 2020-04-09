/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  ButtonStyle,
} from './components/button/button';

export namespace Components {
  interface UniBarText {}
  interface UniButton {
    /**
    * Sets the style of the button One of 'solid' or 'border'
    */
    'buttonStyle': ButtonStyle;
    /**
    * Defines the main color of the button Eg. blue or blue-dark
    */
    'color': string | null;
    /**
    * Defines the text color (hover text color on a border button) Eg. grey or grey-dark
    */
    'textColor': string | null;
    /**
    * Type of the underlying button See https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md One of 'button', 'submit', or 'reset'
    */
    'type': string;
  }
  interface UniCheckbox {}
  interface UniDialog {
    /**
    * Controls whether clicking on the backdrop will dismiss the dialog
    */
    'backdropDismiss': boolean;
    /**
    * Whether the dialog is currently open
    */
    'open': boolean;
  }
  interface UniDialogContent {}
  interface UniDialogTitle {}
  interface UniHero {
    /**
    * How to align the text
    */
    'align'?: 'left' | 'start' | 'center' | 'right' | 'end';
    /**
    * URL of an image to use for the background
    */
    'backgroundUrl'?: string;
  }
  interface UniIcon {
    /**
    * Icon name
    */
    'name': string;
  }
  interface UniTagline {}
  interface UniTextField {
    /**
    * Displays errors below the input
    */
    'errors': string | string[];
    /**
    * Label text above the field
    */
    'label': string;
    /**
    * Marks the field as optional
    */
    'optional': boolean;
    /**
    * Placeholder displayed inside the field
    */
    'placeholder': string;
    /**
    * Optionally prepend an icon to the inside of the field, eg a search icon
    */
    'prependIcon': string;
    /**
    * Optionally prepend some text inside the field, eg a $ prefix
    */
    'prependText': string;
  }
  interface UniUnderline {}
}

declare global {


  interface HTMLUniBarTextElement extends Components.UniBarText, HTMLStencilElement {}
  var HTMLUniBarTextElement: {
    prototype: HTMLUniBarTextElement;
    new (): HTMLUniBarTextElement;
  };

  interface HTMLUniButtonElement extends Components.UniButton, HTMLStencilElement {}
  var HTMLUniButtonElement: {
    prototype: HTMLUniButtonElement;
    new (): HTMLUniButtonElement;
  };

  interface HTMLUniCheckboxElement extends Components.UniCheckbox, HTMLStencilElement {}
  var HTMLUniCheckboxElement: {
    prototype: HTMLUniCheckboxElement;
    new (): HTMLUniCheckboxElement;
  };

  interface HTMLUniDialogElement extends Components.UniDialog, HTMLStencilElement {}
  var HTMLUniDialogElement: {
    prototype: HTMLUniDialogElement;
    new (): HTMLUniDialogElement;
  };

  interface HTMLUniDialogContentElement extends Components.UniDialogContent, HTMLStencilElement {}
  var HTMLUniDialogContentElement: {
    prototype: HTMLUniDialogContentElement;
    new (): HTMLUniDialogContentElement;
  };

  interface HTMLUniDialogTitleElement extends Components.UniDialogTitle, HTMLStencilElement {}
  var HTMLUniDialogTitleElement: {
    prototype: HTMLUniDialogTitleElement;
    new (): HTMLUniDialogTitleElement;
  };

  interface HTMLUniHeroElement extends Components.UniHero, HTMLStencilElement {}
  var HTMLUniHeroElement: {
    prototype: HTMLUniHeroElement;
    new (): HTMLUniHeroElement;
  };

  interface HTMLUniIconElement extends Components.UniIcon, HTMLStencilElement {}
  var HTMLUniIconElement: {
    prototype: HTMLUniIconElement;
    new (): HTMLUniIconElement;
  };

  interface HTMLUniTaglineElement extends Components.UniTagline, HTMLStencilElement {}
  var HTMLUniTaglineElement: {
    prototype: HTMLUniTaglineElement;
    new (): HTMLUniTaglineElement;
  };

  interface HTMLUniTextFieldElement extends Components.UniTextField, HTMLStencilElement {}
  var HTMLUniTextFieldElement: {
    prototype: HTMLUniTextFieldElement;
    new (): HTMLUniTextFieldElement;
  };

  interface HTMLUniUnderlineElement extends Components.UniUnderline, HTMLStencilElement {}
  var HTMLUniUnderlineElement: {
    prototype: HTMLUniUnderlineElement;
    new (): HTMLUniUnderlineElement;
  };
  interface HTMLElementTagNameMap {
    'uni-bar-text': HTMLUniBarTextElement;
    'uni-button': HTMLUniButtonElement;
    'uni-checkbox': HTMLUniCheckboxElement;
    'uni-dialog': HTMLUniDialogElement;
    'uni-dialog-content': HTMLUniDialogContentElement;
    'uni-dialog-title': HTMLUniDialogTitleElement;
    'uni-hero': HTMLUniHeroElement;
    'uni-icon': HTMLUniIconElement;
    'uni-tagline': HTMLUniTaglineElement;
    'uni-text-field': HTMLUniTextFieldElement;
    'uni-underline': HTMLUniUnderlineElement;
  }
}

declare namespace LocalJSX {
  interface UniBarText {}
  interface UniButton {
    /**
    * Sets the style of the button One of 'solid' or 'border'
    */
    'buttonStyle'?: ButtonStyle;
    /**
    * Defines the main color of the button Eg. blue or blue-dark
    */
    'color'?: string | null;
    /**
    * Defines the text color (hover text color on a border button) Eg. grey or grey-dark
    */
    'textColor'?: string | null;
    /**
    * Type of the underlying button See https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md One of 'button', 'submit', or 'reset'
    */
    'type'?: string;
  }
  interface UniCheckbox {}
  interface UniDialog {
    /**
    * Controls whether clicking on the backdrop will dismiss the dialog
    */
    'backdropDismiss'?: boolean;
    /**
    * Emitted when the dialog is closed
    */
    'onClose'?: (event: CustomEvent<any>) => void;
    /**
    * Whether the dialog is currently open
    */
    'open'?: boolean;
  }
  interface UniDialogContent {}
  interface UniDialogTitle {}
  interface UniHero {
    /**
    * How to align the text
    */
    'align'?: 'left' | 'start' | 'center' | 'right' | 'end';
    /**
    * URL of an image to use for the background
    */
    'backgroundUrl'?: string;
  }
  interface UniIcon {
    /**
    * Icon name
    */
    'name'?: string;
  }
  interface UniTagline {}
  interface UniTextField {
    /**
    * Displays errors below the input
    */
    'errors'?: string | string[];
    /**
    * Label text above the field
    */
    'label'?: string;
    /**
    * Marks the field as optional
    */
    'optional'?: boolean;
    /**
    * Placeholder displayed inside the field
    */
    'placeholder'?: string;
    /**
    * Optionally prepend an icon to the inside of the field, eg a search icon
    */
    'prependIcon'?: string;
    /**
    * Optionally prepend some text inside the field, eg a $ prefix
    */
    'prependText'?: string;
  }
  interface UniUnderline {}

  interface IntrinsicElements {
    'uni-bar-text': UniBarText;
    'uni-button': UniButton;
    'uni-checkbox': UniCheckbox;
    'uni-dialog': UniDialog;
    'uni-dialog-content': UniDialogContent;
    'uni-dialog-title': UniDialogTitle;
    'uni-hero': UniHero;
    'uni-icon': UniIcon;
    'uni-tagline': UniTagline;
    'uni-text-field': UniTextField;
    'uni-underline': UniUnderline;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'uni-bar-text': LocalJSX.UniBarText & JSXBase.HTMLAttributes<HTMLUniBarTextElement>;
      'uni-button': LocalJSX.UniButton & JSXBase.HTMLAttributes<HTMLUniButtonElement>;
      'uni-checkbox': LocalJSX.UniCheckbox & JSXBase.HTMLAttributes<HTMLUniCheckboxElement>;
      'uni-dialog': LocalJSX.UniDialog & JSXBase.HTMLAttributes<HTMLUniDialogElement>;
      'uni-dialog-content': LocalJSX.UniDialogContent & JSXBase.HTMLAttributes<HTMLUniDialogContentElement>;
      'uni-dialog-title': LocalJSX.UniDialogTitle & JSXBase.HTMLAttributes<HTMLUniDialogTitleElement>;
      'uni-hero': LocalJSX.UniHero & JSXBase.HTMLAttributes<HTMLUniHeroElement>;
      'uni-icon': LocalJSX.UniIcon & JSXBase.HTMLAttributes<HTMLUniIconElement>;
      'uni-tagline': LocalJSX.UniTagline & JSXBase.HTMLAttributes<HTMLUniTaglineElement>;
      'uni-text-field': LocalJSX.UniTextField & JSXBase.HTMLAttributes<HTMLUniTextFieldElement>;
      'uni-underline': LocalJSX.UniUnderline & JSXBase.HTMLAttributes<HTMLUniUnderlineElement>;
    }
  }
}


