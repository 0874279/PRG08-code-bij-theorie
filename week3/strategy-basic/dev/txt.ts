namespace StrategyBasic {
    export class Txt extends HTMLElement{

        private text : string = ""
        private txtStyle : Style;

        constructor(text : string) {
            super()

            this.text = text

            let main = document.getElementsByTagName("main")[0]
            main.appendChild(this)

            this.showText()
        }

        public setStyle(style : Style) {

            this.txtStyle = style
            this.text = this.txtStyle.applyStyle(this.text)

            this.showText()
        }

        private showText() : void {
            this.innerHTML = this.text
        }
    }

    window.customElements.define("txt-component", Txt as any)
}