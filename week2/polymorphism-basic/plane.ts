/// <reference path="Vehicle.ts" />

namespace Polymorphism {

    export class Plane extends Vehicle{
        constructor() {
            super()
        }

        public move() : void {
            console.log("I am flying!")
        }

        public turnFlaps() : void {

        }
    }

}