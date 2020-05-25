namespace StrategyFinal {
    export class Stunt implements FlyBehavior {
        private plane : Plane

        private _startY : number

        getNextBehavior(): FlyBehavior {
            return new Normal(this.plane)
        }

        constructor(plane : Plane) {
            this.plane = plane
            this._startY = this.plane.y
        }

        public move(): void {
            if(this.plane.y > (this._startY + 40) || this.plane.y < (this._startY - 30)) {
                this.plane.directionY *= -1
            }

            this.plane.x += 5 * this.plane.directionX
            this.plane.y += -4 * this.plane.directionY
        }
    }
}