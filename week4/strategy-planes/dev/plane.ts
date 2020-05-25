/// <reference path="vehicle.ts" />

namespace StrategyFinal {
    export class Plane extends Vehicle {

        // Fields
        private _directionX  : number = 1 // go right 1, go left -1
        private _directionY  : number = 1 // go up 1, go down -1
                
        private _isAboveLand: boolean = true
        public get isAboveLand(): boolean {
            return this._isAboveLand
        }
        public set isAboveLand(value: boolean) {
            this._isAboveLand = value
        }
       
        private _behavior: FlyBehavior
   
        // Properties
        public get directionX() : number    { return this._directionX }
        public set directionX(v : number)   { this._directionX = v }

        public get directionY() : number    { return this._directionY }
        public set directionY(v : number)   { this._directionY = v }
       
        public get behavior() : FlyBehavior { return this._behavior }
        public set behavior(behavior : FlyBehavior) {
            this._behavior = behavior
        }

        constructor(x : number, y : number) {
            super()

            this.x = x
            this.y = y

            this._behavior = new Normal(this)
        }

        public move() {
            if(this.hasBouncedParent()) {
                this.directionX *= -1
            }

            this._behavior.move()

            super.move()
        }

        /**
         * checks if a plane reaches the left or right side of the parent element (game element)
         */
        private hasBouncedParent() : boolean {
            let parent = this.parentElement as HTMLElement
            return (this.x + this.clientWidth > parent.clientWidth || this.x < 0) 
        }

        protected draw() : void {
            this.style.transform = `translate(${this.x}px, ${this.y}px) scaleX(${this.directionX})`
        }
    }
    window.customElements.define("plane-component", Plane as any)
}