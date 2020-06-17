/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonStyle } from "./components/button/button";
export namespace Components {
    interface UniBarText {
    }
    interface UniButton {
        /**
          * Sets the style of the button One of 'solid' or 'border'
         */
        "buttonStyle": ButtonStyle;
        /**
          * Type of the underlying button See https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md One of 'button', 'submit', or 'reset'
         */
        "buttonType": string;
        /**
          * Defines the main color of the button Eg. accent, primary
         */
        "color": string | null;
        /**
          * Disables the button, preventing input
         */
        "disabled": boolean;
        /**
          * Make this button a link to `href` instead
         */
        "href"?: string;
        /**
          * Changes the button into a loading state
         */
        "loading": boolean;
        /**
          * Name of a icon to prepend inside the button Eg. logo-google
         */
        "prependIcon"?: string;
    }
    interface UniCheckbox {
        /**
          * The checked state of the checkbox
         */
        "checked": boolean;
        /**
          * When true, the checkbox is marked as disabled and state cannot be modified
         */
        "disabled": boolean;
        /**
          * Puts the checkbox in an indeterminate state ( [-] )
         */
        "indeterminate": boolean;
        /**
          * Prevents the state from being modified
         */
        "readonly": boolean;
        /**
          * HTML Form value. This is not the checked state, use checked instead
         */
        "value"?: string;
    }
    interface UniComboGroup {
        /**
          * Value of the selected option
         */
        "value": string;
        /**
          * Display a different style radio group, either a "combo" row or "button" group
         */
        "variant": 'combo' | 'button';
    }
    interface UniComboItem {
        /**
          * Marks this option as disabled
         */
        "disabled": boolean;
        "selected": boolean;
        /**
          * Machine value for the option
         */
        "value": string;
    }
    interface UniComboText {
        /**
          * Marks this option as disabled
         */
        "disabled": boolean;
        /**
          * When to fire the select event - focus: when the input is focused - change: when the input's value is changed
         */
        "selectOn": 'focus' | 'change' | 'input';
        "selected": boolean;
        /**
          * Machine value for the option
         */
        "value": string;
    }
    interface UniDialog {
        /**
          * Controls whether clicking on the backdrop will dismiss the dialog
         */
        "backdropDismiss": boolean;
        /**
          * Whether the dialog is currently open
         */
        "open": boolean;
    }
    interface UniDialogContent {
    }
    interface UniDialogTitle {
    }
    interface UniHero {
        /**
          * How to align the text
         */
        "align"?: 'left' | 'start' | 'center' | 'right' | 'end';
        /**
          * URL of an image to use for the background
         */
        "backgroundUrl"?: string;
    }
    interface UniProgressLinear {
        /**
          * Set the bar's color
         */
        "color"?: string;
        /**
          * Controls if the loading bar is visible *
         */
        "value": boolean;
    }
    interface UniRadioController {
        /**
          * Value of the selected option
         */
        "value": string;
    }
    interface UniSelect {
        /**
          * Label to display above the select box
         */
        "label": string;
    }
    interface UniTagline {
        /**
          * Override the default color
         */
        "color": string;
    }
    interface UniTextField {
        /**
          * Makes the field disabled and unselectable
         */
        "disabled": boolean;
        /**
          * Displays errors below the input
         */
        "errors": string | string[];
        /**
          * Label text above the field
         */
        "label": string;
        /**
          * Marks the field as optional
         */
        "optional": boolean;
        /**
          * Placeholder displayed inside the field
         */
        "placeholder": string;
        /**
          * Prevents editing the field, but allows selecting text
         */
        "readonly": boolean;
        /**
          * Set the value of the field
         */
        "value": string;
    }
    interface UniUnderline {
    }
}
declare global {
    interface HTMLUniBarTextElement extends Components.UniBarText, HTMLStencilElement {
    }
    var HTMLUniBarTextElement: {
        prototype: HTMLUniBarTextElement;
        new (): HTMLUniBarTextElement;
    };
    interface HTMLUniButtonElement extends Components.UniButton, HTMLStencilElement {
    }
    var HTMLUniButtonElement: {
        prototype: HTMLUniButtonElement;
        new (): HTMLUniButtonElement;
    };
    interface HTMLUniCheckboxElement extends Components.UniCheckbox, HTMLStencilElement {
    }
    var HTMLUniCheckboxElement: {
        prototype: HTMLUniCheckboxElement;
        new (): HTMLUniCheckboxElement;
    };
    interface HTMLUniComboGroupElement extends Components.UniComboGroup, HTMLStencilElement {
    }
    var HTMLUniComboGroupElement: {
        prototype: HTMLUniComboGroupElement;
        new (): HTMLUniComboGroupElement;
    };
    interface HTMLUniComboItemElement extends Components.UniComboItem, HTMLStencilElement {
    }
    var HTMLUniComboItemElement: {
        prototype: HTMLUniComboItemElement;
        new (): HTMLUniComboItemElement;
    };
    interface HTMLUniComboTextElement extends Components.UniComboText, HTMLStencilElement {
    }
    var HTMLUniComboTextElement: {
        prototype: HTMLUniComboTextElement;
        new (): HTMLUniComboTextElement;
    };
    interface HTMLUniDialogElement extends Components.UniDialog, HTMLStencilElement {
    }
    var HTMLUniDialogElement: {
        prototype: HTMLUniDialogElement;
        new (): HTMLUniDialogElement;
    };
    interface HTMLUniDialogContentElement extends Components.UniDialogContent, HTMLStencilElement {
    }
    var HTMLUniDialogContentElement: {
        prototype: HTMLUniDialogContentElement;
        new (): HTMLUniDialogContentElement;
    };
    interface HTMLUniDialogTitleElement extends Components.UniDialogTitle, HTMLStencilElement {
    }
    var HTMLUniDialogTitleElement: {
        prototype: HTMLUniDialogTitleElement;
        new (): HTMLUniDialogTitleElement;
    };
    interface HTMLUniHeroElement extends Components.UniHero, HTMLStencilElement {
    }
    var HTMLUniHeroElement: {
        prototype: HTMLUniHeroElement;
        new (): HTMLUniHeroElement;
    };
    interface HTMLUniProgressLinearElement extends Components.UniProgressLinear, HTMLStencilElement {
    }
    var HTMLUniProgressLinearElement: {
        prototype: HTMLUniProgressLinearElement;
        new (): HTMLUniProgressLinearElement;
    };
    interface HTMLUniRadioControllerElement extends Components.UniRadioController, HTMLStencilElement {
    }
    var HTMLUniRadioControllerElement: {
        prototype: HTMLUniRadioControllerElement;
        new (): HTMLUniRadioControllerElement;
    };
    interface HTMLUniSelectElement extends Components.UniSelect, HTMLStencilElement {
    }
    var HTMLUniSelectElement: {
        prototype: HTMLUniSelectElement;
        new (): HTMLUniSelectElement;
    };
    interface HTMLUniTaglineElement extends Components.UniTagline, HTMLStencilElement {
    }
    var HTMLUniTaglineElement: {
        prototype: HTMLUniTaglineElement;
        new (): HTMLUniTaglineElement;
    };
    interface HTMLUniTextFieldElement extends Components.UniTextField, HTMLStencilElement {
    }
    var HTMLUniTextFieldElement: {
        prototype: HTMLUniTextFieldElement;
        new (): HTMLUniTextFieldElement;
    };
    interface HTMLUniUnderlineElement extends Components.UniUnderline, HTMLStencilElement {
    }
    var HTMLUniUnderlineElement: {
        prototype: HTMLUniUnderlineElement;
        new (): HTMLUniUnderlineElement;
    };
    interface HTMLElementTagNameMap {
        "uni-bar-text": HTMLUniBarTextElement;
        "uni-button": HTMLUniButtonElement;
        "uni-checkbox": HTMLUniCheckboxElement;
        "uni-combo-group": HTMLUniComboGroupElement;
        "uni-combo-item": HTMLUniComboItemElement;
        "uni-combo-text": HTMLUniComboTextElement;
        "uni-dialog": HTMLUniDialogElement;
        "uni-dialog-content": HTMLUniDialogContentElement;
        "uni-dialog-title": HTMLUniDialogTitleElement;
        "uni-hero": HTMLUniHeroElement;
        "uni-progress-linear": HTMLUniProgressLinearElement;
        "uni-radio-controller": HTMLUniRadioControllerElement;
        "uni-select": HTMLUniSelectElement;
        "uni-tagline": HTMLUniTaglineElement;
        "uni-text-field": HTMLUniTextFieldElement;
        "uni-underline": HTMLUniUnderlineElement;
    }
}
declare namespace LocalJSX {
    interface UniBarText {
    }
    interface UniButton {
        /**
          * Sets the style of the button One of 'solid' or 'border'
         */
        "buttonStyle"?: ButtonStyle;
        /**
          * Type of the underlying button See https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md One of 'button', 'submit', or 'reset'
         */
        "buttonType"?: string;
        /**
          * Defines the main color of the button Eg. accent, primary
         */
        "color"?: string | null;
        /**
          * Disables the button, preventing input
         */
        "disabled"?: boolean;
        /**
          * Make this button a link to `href` instead
         */
        "href"?: string;
        /**
          * Changes the button into a loading state
         */
        "loading"?: boolean;
        /**
          * Name of a icon to prepend inside the button Eg. logo-google
         */
        "prependIcon"?: string;
    }
    interface UniCheckbox {
        /**
          * The checked state of the checkbox
         */
        "checked"?: boolean;
        /**
          * When true, the checkbox is marked as disabled and state cannot be modified
         */
        "disabled"?: boolean;
        /**
          * Puts the checkbox in an indeterminate state ( [-] )
         */
        "indeterminate"?: boolean;
        /**
          * Emitted when checkbox value is changed
         */
        "onUniChange"?: (event: CustomEvent<boolean>) => void;
        /**
          * Prevents the state from being modified
         */
        "readonly"?: boolean;
        /**
          * HTML Form value. This is not the checked state, use checked instead
         */
        "value"?: string;
    }
    interface UniComboGroup {
        /**
          * Value of the selected option
         */
        "value"?: string;
        /**
          * Display a different style radio group, either a "combo" row or "button" group
         */
        "variant"?: 'combo' | 'button';
    }
    interface UniComboItem {
        /**
          * Marks this option as disabled
         */
        "disabled"?: boolean;
        /**
          * Emitted when the button is clicked
         */
        "onUniSelect"?: (event: CustomEvent<void>) => void;
        "selected"?: boolean;
        /**
          * Machine value for the option
         */
        "value"?: string;
    }
    interface UniComboText {
        /**
          * Marks this option as disabled
         */
        "disabled"?: boolean;
        /**
          * Emitted when the button is clicked
         */
        "onUniSelect"?: (event: CustomEvent<void>) => void;
        /**
          * When to fire the select event - focus: when the input is focused - change: when the input's value is changed
         */
        "selectOn"?: 'focus' | 'change' | 'input';
        "selected"?: boolean;
        /**
          * Machine value for the option
         */
        "value"?: string;
    }
    interface UniDialog {
        /**
          * Controls whether clicking on the backdrop will dismiss the dialog
         */
        "backdropDismiss"?: boolean;
        /**
          * Emitted when the dialog is closed
         */
        "onClose"?: (event: CustomEvent<any>) => void;
        /**
          * Whether the dialog is currently open
         */
        "open"?: boolean;
    }
    interface UniDialogContent {
    }
    interface UniDialogTitle {
    }
    interface UniHero {
        /**
          * How to align the text
         */
        "align"?: 'left' | 'start' | 'center' | 'right' | 'end';
        /**
          * URL of an image to use for the background
         */
        "backgroundUrl"?: string;
    }
    interface UniProgressLinear {
        /**
          * Set the bar's color
         */
        "color"?: string;
        /**
          * Controls if the loading bar is visible *
         */
        "value"?: boolean;
    }
    interface UniRadioController {
        /**
          * Emitted when the selected option changes
         */
        "onUniChange"?: (event: CustomEvent<string>) => void;
        /**
          * Value of the selected option
         */
        "value"?: string;
    }
    interface UniSelect {
        /**
          * Label to display above the select box
         */
        "label"?: string;
    }
    interface UniTagline {
        /**
          * Override the default color
         */
        "color"?: string;
    }
    interface UniTextField {
        /**
          * Makes the field disabled and unselectable
         */
        "disabled"?: boolean;
        /**
          * Displays errors below the input
         */
        "errors"?: string | string[];
        /**
          * Label text above the field
         */
        "label"?: string;
        /**
          * Emitted when form field value is committed
         */
        "onUniChange"?: (event: CustomEvent<string>) => void;
        /**
          * Emitted when the form field value changes
         */
        "onUniInput"?: (event: CustomEvent<string>) => void;
        /**
          * Marks the field as optional
         */
        "optional"?: boolean;
        /**
          * Placeholder displayed inside the field
         */
        "placeholder"?: string;
        /**
          * Prevents editing the field, but allows selecting text
         */
        "readonly"?: boolean;
        /**
          * Set the value of the field
         */
        "value"?: string;
    }
    interface UniUnderline {
    }
    interface IntrinsicElements {
        "uni-bar-text": UniBarText;
        "uni-button": UniButton;
        "uni-checkbox": UniCheckbox;
        "uni-combo-group": UniComboGroup;
        "uni-combo-item": UniComboItem;
        "uni-combo-text": UniComboText;
        "uni-dialog": UniDialog;
        "uni-dialog-content": UniDialogContent;
        "uni-dialog-title": UniDialogTitle;
        "uni-hero": UniHero;
        "uni-progress-linear": UniProgressLinear;
        "uni-radio-controller": UniRadioController;
        "uni-select": UniSelect;
        "uni-tagline": UniTagline;
        "uni-text-field": UniTextField;
        "uni-underline": UniUnderline;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "uni-bar-text": LocalJSX.UniBarText & JSXBase.HTMLAttributes<HTMLUniBarTextElement>;
            "uni-button": LocalJSX.UniButton & JSXBase.HTMLAttributes<HTMLUniButtonElement>;
            "uni-checkbox": LocalJSX.UniCheckbox & JSXBase.HTMLAttributes<HTMLUniCheckboxElement>;
            "uni-combo-group": LocalJSX.UniComboGroup & JSXBase.HTMLAttributes<HTMLUniComboGroupElement>;
            "uni-combo-item": LocalJSX.UniComboItem & JSXBase.HTMLAttributes<HTMLUniComboItemElement>;
            "uni-combo-text": LocalJSX.UniComboText & JSXBase.HTMLAttributes<HTMLUniComboTextElement>;
            "uni-dialog": LocalJSX.UniDialog & JSXBase.HTMLAttributes<HTMLUniDialogElement>;
            "uni-dialog-content": LocalJSX.UniDialogContent & JSXBase.HTMLAttributes<HTMLUniDialogContentElement>;
            "uni-dialog-title": LocalJSX.UniDialogTitle & JSXBase.HTMLAttributes<HTMLUniDialogTitleElement>;
            "uni-hero": LocalJSX.UniHero & JSXBase.HTMLAttributes<HTMLUniHeroElement>;
            "uni-progress-linear": LocalJSX.UniProgressLinear & JSXBase.HTMLAttributes<HTMLUniProgressLinearElement>;
            "uni-radio-controller": LocalJSX.UniRadioController & JSXBase.HTMLAttributes<HTMLUniRadioControllerElement>;
            "uni-select": LocalJSX.UniSelect & JSXBase.HTMLAttributes<HTMLUniSelectElement>;
            "uni-tagline": LocalJSX.UniTagline & JSXBase.HTMLAttributes<HTMLUniTaglineElement>;
            "uni-text-field": LocalJSX.UniTextField & JSXBase.HTMLAttributes<HTMLUniTextFieldElement>;
            "uni-underline": LocalJSX.UniUnderline & JSXBase.HTMLAttributes<HTMLUniUnderlineElement>;
        }
    }
}
