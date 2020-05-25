namespace StrategyFinal {

    export class Vehicle extends HTMLElement{

        // Fields
        private _x : number = 0
        private _y : number = 0
        
        // Properties
        public get x() : number     { return this._x }
        public set x(v : number)    { this._x = v; }
        
        public get y() : number     { return this._y }
        public set y(v : number)    { this._y = v; }

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