import { r as registerInstance, h, H as Host } from './index-d50bc264.js';

const buttonCss = ":host{display:inline-block;--background:var(--uni-color, var(--uni-accent));--contrast:var(--uni-color-contrast, var(--uni-accent-contrast))}.button{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0 1rem;border:none;border-radius:20px;background:none;height:40px;min-width:120px;cursor:pointer;font:inherit;font-size:1rem;text-decoration:none}:host(.uni-disabled) .button{cursor:not-allowed;opacity:0.7}.prepend-icon{margin-right:10px}:host(.uni-loading) .button-content,:host(.uni-loading) .prepend-icon{opacity:0.5}:host(.uni-loading) .button{background-image:-webkit-gradient(linear, left top, right top, color-stop(25%, transparent), color-stop(37.5%, rgba(255, 255, 255, 0.5)), color-stop(50%, transparent));background-image:linear-gradient(90deg, transparent 25%, rgba(255, 255, 255, 0.5) 37.5%, transparent 50%);background-size:400% 400%;-webkit-animation:uni-loading-pill 1.5s infinite linear;animation:uni-loading-pill 1.5s infinite linear}:host(.uni-style-border:not(.uni-loading)) .button{border:2px solid var(--background);-webkit-transition:background-color 0.3s, color 0.3s;transition:background-color 0.3s, color 0.3s;color:var(--background)}:host(.uni-style-border:not(.uni-disabled):hover) .button,:host(.uni-style-border:not(.uni-disabled)) .button:focus{color:var(--contrast);background-color:var(--background)}:host(.uni-style-solid) .button,:host(.uni-loading) .button{background-color:var(--background);-webkit-transition:-webkit-filter 0.3s;transition:-webkit-filter 0.3s;transition:filter 0.3s;transition:filter 0.3s, -webkit-filter 0.3s;color:var(--contrast)}:host(.uni-style-solid:not(.uni-disabled)) .button:hover,:host(.uni-style-solid:not(.uni-disabled)) .button:focus{-webkit-filter:brightness(90%);filter:brightness(90%)}@-webkit-keyframes uni-loading-pill{from{background-position-x:75%}to{background-position-x:0}}@keyframes uni-loading-pill{from{background-position-x:75%}to{background-position-x:0}}";

const Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Defines the main color of the button
         * Eg. accent, primary
         * */
        this.color = 'accent';
        /**
         * Sets the style of the button
         * One of 'solid' or 'border'
         * */
        this.buttonStyle = 'solid';
        /**
         * Type of the underlying button
         * See https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
         * One of 'button', 'submit', or 'reset'
         * */
        this.buttonType = 'button';
    }
    render() {
        const isDisabled = this.disabled || this.loading;
        const contents = [
            this.prependIcon && h("ion-icon", { name: this.prependIcon, class: "prepend-icon" }),
            (h("div", { class: "button-content" }, h("slot", null)))
        ];
        return (h(Host, { class: {
                ['uni-style-' + this.buttonStyle]: true,
                [`uni-color-${this.color}`]: true,
                'uni-loading': this.loading,
                'uni-disabled': isDisabled
            } }, this.href ? (h("a", { class: "button", href: this.href, onClick: e => isDisabled && e.preventDefault() }, contents)) : (
        // eslint-disable-next-line react/button-has-type
        h("button", { class: "button", type: this.buttonType, disabled: isDisabled }, contents))));
    }
};
Button.style = buttonCss;

export { Button as uni_button };
