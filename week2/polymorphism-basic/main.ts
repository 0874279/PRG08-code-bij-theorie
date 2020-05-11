/// <reference path="car.ts" />
/// <reference path="plane.ts" />

namespace Polymorphism {
    class Main {

        constructor() {
            let vehicles : Vehicle[] = [
                new Car(),
                new Plane()
            ]

            for (const vehicle of vehicles) {
                vehicle.move()
            }

        }
    }

    new Main()
}

