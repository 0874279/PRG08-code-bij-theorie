"use strict";
var StrategyFinal;
(function (StrategyFinal) {
    class Main {
        constructor() {
            this.planes = [];
            this.planes.push(new StrategyFinal.Plane(0, 150));
            this.planes.push(new StrategyFinal.Plane(300, 50));
            this.planes.push(new StrategyFinal.Plane(400, 100));
            this.gameLoop();
        }
        gameLoop() {
            for (const plane of this.planes) {
                plane.move();
                if (plane.x < 580 - plane.clientWidth) {
                    if (!plane.isAboveLand) {
                        plane.behavior = plane.behavior.getNextBehavior();
                        plane.isAboveLand = true;
                    }
                }
                else {
                    if (plane.isAboveLand) {
                        plane.behavior = plane.behavior.getNextBehavior();
                        plane.isAboveLand = false;
                    }
                }
            }
            requestAnimationFrame(() => this.gameLoop());
        }
    }
    window.addEventListener("load", () => new Main());
})(StrategyFinal || (StrategyFinal = {}));
var StrategyFinal;
(function (StrategyFinal) {
    class Vehicle extends HTMLElement {
        constructor() {
            super();
            this._x = 0;
            this._y = 0;
            let game = document.getElementsByTagName("game")[0];
            game.appendChild(this);
        }
        get x() { return this._x; }
        set x(v) { this._x = v; }
        get y() { return this._y; }
        set y(v) { this._y = v; }
        move() {
            this.draw();
        }
        draw() {
            this.style.transform = `translate(${this.x}px, ${this.y}px)`;
        }
    }
    StrategyFinal.Vehicle = Vehicle;
})(StrategyFinal || (StrategyFinal = {}));
var StrategyFinal;
(function (StrategyFinal) {
    class Plane extends StrategyFinal.Vehicle {
        constructor(x, y) {
            super();
            this._directionX = 1;
            this._directionY = 1;
            this._isAboveLand = true;
            this.x = x;
            this.y = y;
            this._behavior = new StrategyFinal.Normal(this);
        }
        get isAboveLand() {
            return this._isAboveLand;
        }
        set isAboveLand(value) {
            this._isAboveLand = value;
        }
        get directionX() { return this._directionX; }
        set directionX(v) { this._directionX = v; }
        get directionY() { return this._directionY; }
        set directionY(v) { this._directionY = v; }
        get behavior() { return this._behavior; }
        set behavior(behavior) {
            this._behavior = behavior;
        }
        move() {
            if (this.hasBouncedParent()) {
                this.directionX *= -1;
            }
            this._behavior.move();
            super.move();
        }
        hasBouncedParent() {
            let parent = this.parentElement;
            return (this.x + this.clientWidth > parent.clientWidth || this.x < 0);
        }
        draw() {
            this.style.transform = `translate(${this.x}px, ${this.y}px) scaleX(${this.directionX})`;
        }
    }
    StrategyFinal.Plane = Plane;
    window.customElements.define("plane-component", Plane);
})(StrategyFinal || (StrategyFinal = {}));
var StrategyFinal;
(function (StrategyFinal) {
    class Normal {
        constructor(plane) {
            this.plane = plane;
        }
        getNextBehavior() {
            return new StrategyFinal.Stunt(this.plane);
        }
        move() {
            this.plane.x += 5 * this.plane.directionX;
            this.plane.y += 0 * this.plane.directionY;
        }
    }
    StrategyFinal.Normal = Normal;
})(StrategyFinal || (StrategyFinal = {}));
var StrategyFinal;
(function (StrategyFinal) {
    class Stunt {
        constructor(plane) {
            this.plane = plane;
            this._startY = this.plane.y;
        }
        getNextBehavior() {
            return new StrategyFinal.Normal(this.plane);
        }
        move() {
            if (this.plane.y > (this._startY + 40) || this.plane.y < (this._startY - 30)) {
                this.plane.directionY *= -1;
            }
            this.plane.x += 5 * this.plane.directionX;
            this.plane.y += -4 * this.plane.directionY;
        }
    }
    StrategyFinal.Stunt = Stunt;
})(StrategyFinal || (StrategyFinal = {}));
//# sourceMappingURL=main.js.map