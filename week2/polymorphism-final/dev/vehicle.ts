namespace PolymorphismFinal {

    export class Vehicle extends HTMLElement{

        protected x : number = 0
        protected y : number = 0

        constructor() {
            super()

            let game = document.getElementsByTagName("game")[0]
            game.appendChild(this)
        }

        public move() : void {
            this.draw()
        }

        protected draw() {
            this.style.transform = `translate(${this.x}px, ${this.y}px)`
        }
    }

}