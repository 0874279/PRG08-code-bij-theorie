"use strict";
var Polymorphism;
(function (Polymorphism) {
    class Vehicle {
        constructor() {
        }
        move() {
            console.log("I am moving!");
        }
    }
    Polymorphism.Vehicle = Vehicle;
})(Polymorphism || (Polymorphism = {}));
var Polymorphism;
(function (Polymorphism) {
    class Car extends Polymorphism.Vehicle {
        constructor() {
            super();
        }
        move() {
            console.log("I am driving");
        }
        brake() {
        }
    }
    Polymorphism.Car = Car;
})(Polymorphism || (Polymorphism = {}));
var Polymorphism;
(function (Polymorphism) {
    class Plane extends Polymorphism.Vehicle {
        constructor() {
            super();
        }
        move() {
            console.log("I am flying!");
        }
        turnFlaps() {
        }
    }
    Polymorphism.Plane = Plane;
})(Polymorphism || (Polymorphism = {}));
var Polymorphism;
(function (Polymorphism) {
    class Main {
        constructor() {
            let vehicles = [
                new Polymorphism.Car(),
                new Polymorphism.Plane()
            ];
            for (const vehicle of vehicles) {
                vehicle.move();
            }
        }
    }
    new Main();
})(Polymorphism || (Polymorphism = {}));
//# sourceMappingURL=main.js.map