"use strict";
var PolymorphismFinal;
(function (PolymorphismFinal) {
    class Vehicle extends HTMLElement {
        constructor() {
            super();
            this.x = 0;
            this.y = 0;
            let game = document.getElementsByTagName("game")[0];
            game.appendChild(this);
        }
        move() {
            this.draw();
        }
        draw() {
            this.style.transform = `translate(${this.x}px, ${this.y}px)`;
        }
    }
    PolymorphismFinal.Vehicle = Vehicle;
})(PolymorphismFinal || (PolymorphismFinal = {}));
var PolymorphismFinal;
(function (PolymorphismFinal) {
    class Car extends PolymorphismFinal.Vehicle {
        constructor() {
            super();
            this.y = 320;
        }
        move() {
            console.log("I am driving");
            this.x += 0.2;
            super.move();
        }
    }
    PolymorphismFinal.Car = Car;
    window.customElements.define("car-component", Car);
})(PolymorphismFinal || (PolymorphismFinal = {}));
var PolymorphismFinal;
(function (PolymorphismFinal) {
    class Main {
        constructor() {
            this.vehicles = [];
            this.vehicles.push(new PolymorphismFinal.Car());
            this.vehicles.push(new PolymorphismFinal.Plane(0));
            this.vehicles.push(new PolymorphismFinal.Plane(300));
            this.vehicles.push(new PolymorphismFinal.Plane(400));
            this.gameLoop();
        }
        gameLoop() {
            for (const vehicle of this.vehicles) {
                vehicle.move();
            }
            requestAnimationFrame(() => this.gameLoop());
        }
    }
    window.addEventListener("load", () => new Main());
})(PolymorphismFinal || (PolymorphismFinal = {}));
var PolymorphismFinal;
(function (PolymorphismFinal) {
    class Plane extends PolymorphismFinal.Vehicle {
        constructor(x) {
            super();
            this.directionX = 1;
            this.startY = 100;
            this.directionY = 1;
            this.x = x;
            this.y = this.startY;
        }
        move() {
            if (this.y > (this.startY + 100) || this.y < (this.startY - 100)) {
                this.directionY *= -1;
            }
            if (this.hasBouncedViewport()) {
                this.directionX *= -1;
            }
            this.x += 5 * this.directionX;
            this.y += 1 * this.directionY;
            super.move();
        }
        hasBouncedViewport() {
            return (this.x + this.clientWidth > window.innerWidth || this.x < 0);
        }
        draw() {
            this.style.transform = `translate(${this.x}px, ${this.y}px) scaleX(${this.directionX})`;
        }
    }
    PolymorphismFinal.Plane = Plane;
    window.customElements.define("plane-component", Plane);
})(PolymorphismFinal || (PolymorphismFinal = {}));
//# sourceMappingURL=main.js.map