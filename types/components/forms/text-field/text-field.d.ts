import { EventEmitter } from '../../../stencil.core';
export declare class TextField {
    /**
     * Label text above the field
    * */
    label: string;
    /**
     * Placeholder displayed inside the field
     * */
    placeholder: string;
    /**
     * Makes the field disabled and uneditable
     * */
    disabled: boolean;
    /**
     * Marks the field as optional
     * */
    optional: boolean;
    /**
     * Optionally prepend some text inside the field, eg a $ prefix
     * */
    prependText: string;
    /**
     * Optionally prepend an icon to the inside of the field, eg a search icon
     * */
    prependIcon: string;
    /**
     * Displays errors below the input
     * */
    errors: string | string[];
    /**
     * Set the value of the field
     * */
    value: string;
    /**
     * Emitted when form field value is committed
    * */
    uniChange: EventEmitter<string>;
    /**
     * Emitted when the form field value changes
    * */
    uniInput: EventEmitter<string>;
    private uniqueId;
    private get errorList();
    render(): any;
    private renderErrors;
}
