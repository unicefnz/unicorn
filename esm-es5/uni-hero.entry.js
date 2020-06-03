import { r as registerInstance, h, H as Host } from './index-61d4a425.js';
var heroCss = ":host{background-repeat:no-repeat;background-size:cover;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-height:300px;padding:40px 100px}.hero-content{max-width:600px}";
var Hero = /** @class */ (function () {
    function Hero(hostRef) {
        registerInstance(this, hostRef);
    }
    Hero.prototype.render = function () {
        return (h(Host, { style: {
                backgroundImage: this.backgroundUrl && "url(\"" + this.backgroundUrl + "\")",
                justifyContent: this.align
            } }, h("div", { class: "hero-content", style: { textAlign: this.align } }, h("slot", null))));
    };
    return Hero;
}());
Hero.style = heroCss;
export { Hero as uni_hero };
