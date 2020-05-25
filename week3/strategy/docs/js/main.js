"use strict";
var StrategyBasic;
(function (StrategyBasic) {
    class Main {
        constructor() {
            let txt = new StrategyBasic.Txt("Hello World");
            txt.setStyle(new StrategyBasic.Reverse());
        }
    }
    StrategyBasic.Main = Main;
})(StrategyBasic || (StrategyBasic = {}));
window.addEventListener("load", () => new StrategyBasic.Main());
var StrategyBasic;
(function (StrategyBasic) {
    class Txt extends HTMLElement {
        constructor(text) {
            super();
            this.text = "";
            this.text = text;
            let main = document.getElementsByTagName("main")[0];
            main.appendChild(this);
            this.showText();
        }
        setStyle(style) {
            this.txtStyle = style;
            this.text = this.txtStyle.applyStyle(this.text);
            this.showText();
        }
        showText() {
            this.innerHTML = this.text;
        }
    }
    StrategyBasic.Txt = Txt;
    window.customElements.define("txt-component", Txt);
})(StrategyBasic || (StrategyBasic = {}));
var StrategyBasic;
(function (StrategyBasic) {
    class Lower {
        applyStyle(text) {
            return text.toLowerCase();
        }
    }
    StrategyBasic.Lower = Lower;
})(StrategyBasic || (StrategyBasic = {}));
var StrategyBasic;
(function (StrategyBasic) {
    class Reverse {
        applyStyle(text) {
            let splitArray = text.split("");
            let reverseArray = splitArray.reverse();
            return reverseArray.join("");
        }
    }
    StrategyBasic.Reverse = Reverse;
})(StrategyBasic || (StrategyBasic = {}));
var StrategyBasic;
(function (StrategyBasic) {
    class Upper {
        applyStyle(text) {
            return text.toUpperCase();
        }
    }
    StrategyBasic.Upper = Upper;
})(StrategyBasic || (StrategyBasic = {}));
//# sourceMappingURL=main.js.map