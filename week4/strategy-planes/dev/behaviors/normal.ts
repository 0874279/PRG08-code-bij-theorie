namespace StrategyFinal {
    export class Normal implements FlyBehavior {
        private plane : Plane
        
        constructor(plane : Plane) {
            this.plane = plane
        }
        getNextBehavior(): FlyBehavior {
            return new Stunt(this.plane)
        }

        public move(): void {
            this.plane.x += 5 * this.plane.directionX
            this.plane.y += 0 * this.plane.directionY
        }
    }
}