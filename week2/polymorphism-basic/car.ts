/// <reference path="Vehicle.ts" />

namespace Polymorphism {
    
    export class Car extends Vehicle{

        constructor() {
            super()
        }
        
        public move() : void {
            console.log("I am driving")
        }

        public brake() : void {

        }
    }
}
