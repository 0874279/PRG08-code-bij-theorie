/// <reference path="tree.ts"/>

class Game {
    
    private static instance : Game

    private trees:Tree[] = []
    private bullets:Bullet[] = []

    public static getInstance() : Game {
        if(!Game.instance) Game.instance = new Game()
        return Game.instance
    }

    public addBullet(bullet : Bullet) {
        this.bullets.push(bullet)
    }

    private constructor() {
        // de game heeft trees nodig
        for (let i = 0; i < 4; i++) {
            this.trees.push(new Tree(-100, i * 250 + 100))
        }

        // start de game loop
        this.gameLoop()
    }
    
    private gameLoop(){
        // gebruik een for..of loop om de move functie van alle trees in de array aan te roepen
        for (const tree of this.trees) {
            tree.move()
        }
        for (const bullet of this.bullets) {
            bullet.move()
        }
                
        // animation
        requestAnimationFrame(() => this.gameLoop())
    }
} 

window.addEventListener("load", () => Game.getInstance())