import { a as patchEsm, b as bootstrapLazy } from './core-244a4bc2.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["uni-combo-group", [[1, "uni-combo-group", { "options": [16], "value": [1], "internalSelected": [32] }]]], ["uni-select", [[4, "uni-select", { "label": [1] }]]], ["uni-bar-text_10", [[1, "uni-dialog-title"], [1, "uni-bar-text"], [1, "uni-button", { "loading": [4], "disabled": [4], "color": [1], "buttonStyle": [1, "button-style"], "prependIcon": [1, "prepend-icon"], "buttonType": [1, "button-type"] }], [1, "uni-checkbox", { "value": [4], "disabled": [4] }], [1, "uni-dialog", { "open": [4], "backdropDismiss": [4, "backdrop-dismiss"], "shakeTimer": [32] }], [1, "uni-dialog-content"], [1, "uni-hero", { "backgroundUrl": [1, "background-url"], "align": [1] }], [1, "uni-tagline", { "color": [1] }], [1, "uni-text-field", { "label": [1], "placeholder": [1], "disabled": [4], "readonly": [4], "optional": [4], "prependText": [1, "prepend-text"], "prependIcon": [1, "prepend-icon"], "errors": [1], "value": [1] }], [1, "uni-underline"]]]], options);
    });
};
export { defineCustomElements };
