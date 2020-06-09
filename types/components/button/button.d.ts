export declare type ButtonStyle = 'solid' | 'border';
export declare class Button {
    /**
     * Changes the button into a loading state
     * */
    readonly loading: boolean;
    /**
     * Disables the button, preventing input
     * */
    readonly disabled: boolean;
    /**
     * Defines the main color of the button
     * Eg. accent, primary
     * */
    readonly color: string | null;
    /**
     * Sets the style of the button
     * One of 'solid' or 'border'
     * */
    readonly buttonStyle: ButtonStyle;
    /**
     * Name of a icon to prepend inside the button
     * Eg. logo-google
     * */
    readonly prependIcon?: string;
    /**
     * Type of the underlying button
     * See https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
     * One of 'button', 'submit', or 'reset'
     * */
    readonly buttonType: string;
    /**
     * Make this button a link to `href` instead
     * */
    readonly href?: string;
    render(): any;
}
