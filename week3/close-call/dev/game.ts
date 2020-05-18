class Game {

    // Fields
    private gameobjects : GameObject[] = []
    
    private score   : number    = 0
    private request : number    = 0
    private gameover: boolean   = false


    constructor() {
        for(let i = 0 ; i < 6 ; i++) {
            this.addCarWithRock(i)
        }

        this.gameLoop()
    }

    private addCarWithRock(index : number) {
        this.gameobjects.push(new Car(index, this))
        this.gameobjects.push(new Rock(index))
    }

    private gameLoop(){
        for (const gameobject of this.gameobjects) {
            gameobject.move()
        }

        this.checkCollision()
        
        this.request = requestAnimationFrame(() => this.gameLoop())
    }

    private checkCollision() {
        for (const gameobject1 of this.gameobjects) {
            for (const gameobject2 of this.gameobjects) {
                if(gameobject1.hasCollision(gameobject2)) {
                    gameobject1.onCollision(gameobject2)
                }
            }
        }

        // for(let car of this.cars) {
        //     for(let rock of this.rocks) {
        //         if(car.hasCollision(rock)) {
        //         // if(this.hasCollision(car, rock)) {
        //             rock.crashed(car.speed)
        //             car.crash()
        //             this.gameOver()
        //         }
        //     }
        // }
    }

    public gameOver() : void{
        this.gameover = true
        document.getElementById("score").innerHTML = "Game Over"
        cancelAnimationFrame(this.request)
    }

    public addScore(x : number){
        if(!this.gameover) {
            this.score += Math.floor(x)
            this.draw()
        }
    }

    private draw() {
        document.getElementById("score").innerHTML = "Score : "+this.score
    }
} 

// load
window.addEventListener("load", () => new Game() )