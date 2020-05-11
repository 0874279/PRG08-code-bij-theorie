namespace PolymorphismFinal {
    export class Plane extends Vehicle {

        private directionX  : number = 1 // go right 1, go left -1
        private startY      : number = 100
        private directionY  : number = 1 // go up 1, go down -1

        constructor(x : number) {
            super()

            this.x = x
            this.y = this.startY
        }

        public move() {
            
            if(this.y > (this.startY + 100) || this.y < (this.startY - 100)) {
                this.directionY *= -1
            }

            if(this.hasBouncedViewport()) {
                this.directionX *= -1
            }

            this.x += 5 * this.directionX
            this.y += 1 * this.directionY

            super.move()
        }

        private hasBouncedViewport() : boolean {
            return (this.x + this.clientWidth > window.innerWidth || this.x < 0) 
        }

        protected draw() : void {
            this.style.transform = `translate(${this.x}px, ${this.y}px) scaleX(${this.directionX})`
        }
    }
    window.customElements.define("plane-component", Plane as any)
}