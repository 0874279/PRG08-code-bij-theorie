"use strict";
class GameObject extends HTMLElement {
    constructor() {
        super();
        this._x = 0;
        this._y = 0;
        this._xspeed = 0;
        this._yspeed = 0;
        this._direction = 1;
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this);
    }
    get x() { return this._x; }
    set x(v) { this._x = v; }
    get y() { return this._y; }
    set y(v) { this._y = v; }
    get xspeed() { return this._xspeed; }
    set xspeed(v) { this._xspeed = v; }
    get yspeed() { return this._yspeed; }
    set yspeed(v) { this._yspeed = v; }
    get direction() { return this._direction; }
    set direction(v) { this._direction = v; }
    get width() { return this.clientWidth; }
    get height() { return this.clientHeight; }
    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.draw();
    }
    draw() {
        this.style.transform = "translate(" + this.x + "px, " + this.y + "px) scale(" + this.direction + ",1)";
    }
    hasCollision(gameobject) {
        return (this._x < gameobject._x + gameobject.width &&
            this._x + this.width > gameobject._x &&
            this._y < gameobject._y + gameobject.height &&
            this._y + this.height > gameobject._y);
    }
    delete() {
        this.remove();
        Game.instance.removeGameObject(this);
    }
}
class Chicken extends GameObject {
    constructor() {
        super();
        this.observers = [];
        this.moveBehavior = new MoveToPoint(this, 5);
        window.addEventListener("click", (e) => this.onWindowClick(e));
    }
    onWindowClick(e) {
        this.moveBehavior.move(e.clientX, e.clientY);
    }
    onCollision(gameObject) {
        if (gameObject instanceof Phone) {
            this.notifyObservers();
        }
    }
    reset() {
        this.x = 0;
        this.y = 0;
        this.xspeed = 0;
        this.yspeed = 0;
    }
    register(observer) {
        this.observers.push(observer);
    }
    unregister(observer) {
        let index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }
    notifyObservers() {
        for (const observer of this.observers) {
            observer.notify();
        }
    }
}
window.customElements.define("chicken-component", Chicken);
class Game {
    constructor() {
        this.score = 0;
        this._gameOver = false;
        this.gameObjects = [];
        this.ui = document.getElementsByTagName("ui")[0];
        let chicken = new Chicken();
        this.gameObjects.push(chicken);
        for (let c = 0; c < 10; c++) {
            this.gameObjects.push(new Zombie(chicken));
        }
        setInterval(() => {
            this.gameObjects.push(new Phone());
        }, 5000);
        setInterval(() => {
            this.gameObjects.push(new Grain());
        }, 3000);
        this.gameLoop();
    }
    static get instance() {
        if (!Game._instance)
            Game._instance = new Game();
        return this._instance;
    }
    gameLoop() {
        for (const gameObject of this.gameObjects) {
            gameObject.update();
            this.checkCollision(gameObject);
        }
        if (!this._gameOver) {
            requestAnimationFrame(() => this.gameLoop());
        }
    }
    checkCollision(gameObject1) {
        for (const gameobject2 of this.gameObjects) {
            if (gameObject1.hasCollision(gameobject2)) {
                gameObject1.onCollision(gameobject2);
            }
        }
    }
    addPoint() {
        this.score++;
        this.ui.innerHTML = "Score: " + this.score;
    }
    removeGameObject(gameObject) {
        let index = this.gameObjects.indexOf(gameObject);
        this.gameObjects.splice(index, 1);
    }
    gameOver() {
        for (const gameObject of this.gameObjects) {
            gameObject.reset();
        }
        this.score = 0;
        this.ui.innerHTML = "Score: 0";
    }
}
window.addEventListener("load", () => Game.instance);
class Grain extends GameObject {
    constructor() {
        super();
        this.x = Math.random() * (window.innerWidth - this.width);
        this.y = Math.random() * (window.innerHeight - this.height);
    }
    onCollision(gameObject) {
        if (gameObject instanceof Chicken) {
            Game.instance.addPoint();
            this.delete();
        }
    }
    reset() {
        this.delete();
    }
}
window.customElements.define("grain-component", Grain);
class Phone extends GameObject {
    constructor() {
        super();
        this.x = Math.random() * (window.innerWidth - this.width);
        this.y = Math.random() * (window.innerHeight - this.height);
    }
    onCollision(gameObject) {
        if (gameObject instanceof Chicken) {
            this.delete();
        }
    }
    reset() {
        this.delete();
    }
}
window.customElements.define("phone-component", Phone);
class Zombie extends GameObject {
    constructor(chicken) {
        super();
        this.chicken = chicken;
        this.moveBehavior = new MoveToPoint(this, Math.random() * 3 + 1);
        this.reset();
        this.chicken.register(this);
    }
    update() {
        this.moveBehavior.move(this.chicken.x, this.chicken.y);
        super.update();
    }
    notify() {
        this.moveBehavior = new Wait(this);
        this.style.backgroundImage = `url("images/calling.png")`;
        setTimeout(() => {
            this.moveBehavior = new MoveToPoint(this, Math.random() * 3 + 1);
            this.style.backgroundImage = `url("images/zombie.png")`;
        }, 2000);
    }
    onCollision(gameObject) {
        if (gameObject instanceof Chicken) {
            Game.instance.gameOver();
        }
    }
    reset() {
        this.x = Math.random() * (window.innerWidth - this.clientWidth);
        this.y = Math.random() * (window.innerHeight / 2) + (window.innerHeight / 2 - this.clientHeight);
    }
}
window.customElements.define("zombie-component", Zombie);
class MoveToPoint {
    constructor(gameObject, speedMultiplier) {
        this.gameObject = gameObject;
        this.speedMultiplier = speedMultiplier;
    }
    move(xPoint, yPoint) {
        this.calculateSpeedToPoint(xPoint, yPoint);
    }
    calculateSpeedToPoint(xPoint, yPoint) {
        let xdist = xPoint - this.gameObject.x;
        let ydist = yPoint - this.gameObject.y;
        let distance = Math.sqrt(xdist * xdist + ydist * ydist);
        this.gameObject.xspeed = xdist / distance;
        this.gameObject.yspeed = ydist / distance;
        this.gameObject.xspeed *= this.speedMultiplier;
        this.gameObject.yspeed *= this.speedMultiplier;
        this.gameObject.direction = (this.gameObject.xspeed < 0) ? 1 : -1;
    }
}
class Wait {
    constructor(gameObject) {
        this.gameObject = gameObject;
    }
    move(xPoint = 0, yPoint = 0) {
        this.gameObject.xspeed = 0;
        this.gameObject.yspeed = 0;
    }
}
//# sourceMappingURL=main.js.map