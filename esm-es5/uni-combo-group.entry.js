import { r as registerInstance, c as createEvent, h, H as Host } from './index-61d4a425.js';
var comboGroupCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-pack:stretch;justify-content:stretch;border:1px solid var(--uni-color, var(--uni-dark));border-radius:4px}.combo-item:not(:last-child){border-right:1px solid var(--uni-color, var(--uni-dark))}.combo-item{-ms-flex:1;flex:1;display:block;text-align:center;padding:0.5em 1em;border:none;background:none;font:inherit}.combo-item.selected{background:var(--uni-color, var(--uni-accent))}.combo-item:not(.selected){cursor:pointer}";
var ComboGroup = /** @class */ (function () {
    function ComboGroup(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Available options in the combo group
        * */
        this.options = [];
        this.uniChange = createEvent(this, "uniChange", 7);
    }
    ComboGroup.prototype.onValueChange = function () {
        this.internalSelected = this.value;
    };
    ComboGroup.prototype.connectedCallback = function () {
        this.onValueChange();
    };
    ComboGroup.prototype.optClick = function (opt) {
        if (this.internalSelected === opt.id)
            return;
        this.internalSelected = opt.id;
        this.uniChange.emit(opt.id);
    };
    ComboGroup.prototype.render = function () {
        var _this = this;
        return (h(Host, null, this.options.map(function (opt) { return (h("button", { class: {
                selected: opt.id === _this.internalSelected,
                'combo-item': true
            }, onClick: function () { return _this.optClick(opt); }, type: "button" }, opt.title)); })));
    };
    Object.defineProperty(ComboGroup, "watchers", {
        get: function () {
            return {
                "value": ["onValueChange"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return ComboGroup;
}());
ComboGroup.style = comboGroupCss;
export { ComboGroup as uni_combo_group };
