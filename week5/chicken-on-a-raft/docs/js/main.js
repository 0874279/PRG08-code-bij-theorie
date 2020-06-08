class Chicken {
    constructor(x, y, tree) {
        this.div = document.createElement("bird");
        tree.div.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
        this.div.addEventListener("click", () => this.handleClick());
    }
    handleClick() {
        console.log("Chicken click! ");
        if (!this.gun) {
            this.gun = new Gun(this);
        }
        this.gun.fire();
    }
}
class Tree {
    constructor(x, y) {
        this.chickens = [];
        this.div = document.createElement("tree");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.speed = Math.random() * 4 + 1;
        this.x = x;
        this.y = y;
        for (let i = 0; i < Math.random() * 4; i++) {
            this.chickens.push(new Chicken(i * 100 + 20, -70, this));
        }
    }
    move() {
        this.x += this.speed;
        if (this.x > window.innerWidth)
            this.x = -450;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
class Game {
    constructor() {
        this.trees = [];
        this.bullets = [];
        for (let i = 0; i < 4; i++) {
            this.trees.push(new Tree(-100, i * 250 + 100));
        }
        this.gameLoop();
    }
    static getInstance() {
        if (!Game.instance)
            Game.instance = new Game();
        return Game.instance;
    }
    addBullet(bullet) {
        this.bullets.push(bullet);
    }
    gameLoop() {
        for (const tree of this.trees) {
            tree.move();
        }
        for (const bullet of this.bullets) {
            bullet.move();
        }
        requestAnimationFrame(() => this.gameLoop());
    }
}
window.addEventListener("load", () => Game.getInstance());
class Bullet {
    constructor(x, y) {
        this.div = document.createElement("bullet");
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.xspeed = -1;
        this.yspeed = 1;
        this.move();
    }
    move() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
}
class Gun {
    constructor(chicken) {
        this.div = document.createElement("gun");
        chicken.div.appendChild(this.div);
        this.x = 20;
        this.y = 40;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.fire();
    }
    fire() {
        let rect = this.div.getBoundingClientRect();
        console.log("plaats een kogel op " + rect.left + " , " + rect.top);
        Game.getInstance().addBullet(new Bullet(rect.left, rect.top));
    }
}
//# sourceMappingURL=main.js.map