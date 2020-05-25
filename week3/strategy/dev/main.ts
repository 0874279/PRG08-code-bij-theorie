namespace StrategyBasic {
    export class Main {

        constructor() {
            let txt : Txt = new Txt("Hello World")

            txt.setStyle(new Reverse())
        }

        
    }
}

window.addEventListener("load", () => new StrategyBasic.Main())

