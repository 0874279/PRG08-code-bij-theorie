/// <reference path="Vehicle.ts" />

namespace PolymorphismFinal {
    
    export class Car extends Vehicle{

        constructor() {
            super()

            this.y = 320
        }
        
        // de child class heeft ook de functie opgenomen.
        // Op dit moment overschrijft de child class de 
        // functionaliteit van de parent.
        public move(): void {
            console.log("I am driving")

            this.x += 0.2


            super.move()
        }
    }

    window.customElements.define("car-component", Car)
}
