"use strict";
class Ball extends HTMLElement {
    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this);
    }
    update() {
        console.log("Update ball");
        this.x++;
        this.y++;
        this.draw();
    }
    draw() {
        this.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
window.customElements.define("ball-component", Ball);
class Game {
    constructor() {
        console.log("Game created");
        this.ball = new Ball();
        this.gameloop();
    }
    gameloop() {
        this.ball.update();
        requestAnimationFrame(() => this.gameloop());
    }
}
window.addEventListener("load", () => new Game());
//# sourceMappingURL=main.js.map