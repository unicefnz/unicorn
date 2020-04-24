'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-bbabf9be.js');

const ComboGroup = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * Available options in the combo group
        * */
        this.options = [];
        this.uniChange = core.createEvent(this, "uniChange", 7);
    }
    onValueChange() {
        this.internalSelected = this.value;
    }
    connectedCallback() {
        this.onValueChange();
    }
    optClick(opt) {
        if (this.internalSelected === opt.id)
            return;
        this.internalSelected = opt.id;
        this.uniChange.emit(opt.id);
    }
    render() {
        return (core.h(core.Host, null, this.options.map(opt => (core.h("button", { class: {
                selected: opt.id === this.internalSelected,
                'combo-item': true
            }, onClick: () => this.optClick(opt), type: "button" }, opt.title)))));
    }
    static get watchers() { return {
        "value": ["onValueChange"]
    }; }
    static get style() { return ":host{display:-ms-flexbox;display:flex;-ms-flex-pack:stretch;justify-content:stretch;border:1px solid var(--uni-color,var(--uni-dark));border-radius:4px}.combo-item:not(:last-child){border-right:1px solid var(--uni-color,var(--uni-dark))}.combo-item{-ms-flex:1;flex:1;display:block;text-align:center;padding:.5em 1em;border:none;background:none;font:inherit}.combo-item.selected{background:var(--uni-color,var(--uni-accent))}.combo-item:not(.selected){cursor:pointer}"; }
};

exports.uni_combo_group = ComboGroup;
