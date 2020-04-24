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
    private uniqueId;
    private get errorList();
    render(): any;
    private renderErrors;
}
