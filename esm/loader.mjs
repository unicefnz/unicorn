import { a as patchEsm, b as bootstrapLazy } from './index-d50bc264.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["uni-dialog-title",[[1,"uni-dialog-title"]]],["uni-bar-text",[[1,"uni-bar-text"]]],["uni-button",[[1,"uni-button",{"loading":[4],"disabled":[4],"color":[1],"buttonStyle":[1,"button-style"],"prependIcon":[1,"prepend-icon"],"buttonType":[1,"button-type"],"href":[1]}]]],["uni-checkbox",[[1,"uni-checkbox",{"value":[4],"disabled":[4]}]]],["uni-combo-group",[[1,"uni-combo-group",{"options":[16],"value":[1],"internalSelected":[32]}]]],["uni-dialog",[[1,"uni-dialog",{"open":[4],"backdropDismiss":[4,"backdrop-dismiss"],"shakeTimer":[32]}]]],["uni-dialog-content",[[1,"uni-dialog-content"]]],["uni-hero",[[1,"uni-hero",{"backgroundUrl":[1,"background-url"],"align":[1]}]]],["uni-progress-linear",[[1,"uni-progress-linear",{"value":[4],"color":[1]}]]],["uni-select",[[4,"uni-select",{"label":[1]}]]],["uni-tagline",[[1,"uni-tagline",{"color":[1]}]]],["uni-text-field",[[1,"uni-text-field",{"label":[1],"placeholder":[1],"disabled":[4],"readonly":[4],"optional":[4],"prependText":[1,"prepend-text"],"prependIcon":[1,"prepend-icon"],"errors":[1],"value":[1]}]]],["uni-underline",[[1,"uni-underline"]]]], options);
});

export { defineCustomElements };
