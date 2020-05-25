namespace StrategyBasic {

    export class Reverse {
        public applyStyle(text : string) : string {
            let splitArray   = text.split("")
            let reverseArray = splitArray.reverse()
            return reverseArray.join("")
        }
    }

}