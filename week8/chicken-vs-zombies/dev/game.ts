class Game {
    // Fields
    private static _instance : Game

    private score       : number        = 0
    private _gameOver   : boolean       = false
    private gameObjects : GameObject[]  = [] 
 
    private ui          : Element
    // Properties
    public static get instance() : Game {
        if(!Game._instance) Game._instance = new Game()
        return this._instance
    }

    private constructor() {
        this.ui = document.getElementsByTagName("ui")[0]


        let chicken : Chicken = new Chicken()
        this.gameObjects.push(chicken)
  
        for(let c = 0; c<10; c++){
            this.gameObjects.push(new Zombie(chicken))
        }
 
        setInterval(() => {
            this.gameObjects.push(new Phone())
        }, 5000);

        setInterval(() => {
            this.gameObjects.push(new Grain())
        }, 3000);

        this.gameLoop()
    }
    
    private gameLoop(){

        for (const gameObject of this.gameObjects) {
            gameObject.update()

            this.checkCollision(gameObject)
        }
        

        // loop aanroepen zo lang het geen game over is
        if (!this._gameOver) {
            requestAnimationFrame(() => this.gameLoop())
        }
    }

    /**
     * Checks the collision of the givin game object against all other game objects.
     * If a collision occurs, the onCollision of the givin game object is called
     * @param gameObject1 The game object to check
     */
    private checkCollision(gameObject1 : GameObject) {
        for (const gameobject2 of this.gameObjects) {
            if(gameObject1.hasCollision(gameobject2)) {
                gameObject1.onCollision(gameobject2)
            }
        }
    }

    public addPoint() {
        this.score++
        this.ui.innerHTML = "Score: "+this.score
    }

    public removeGameObject(gameObject : GameObject) {
        let index = this.gameObjects.indexOf(gameObject)
        this.gameObjects.splice(index, 1)
    }

    public gameOver() : void {
        for (const gameObject of this.gameObjects) {
            gameObject.reset()
        }
        this.score = 0
        this.ui.innerHTML = "Score: 0"
    }
} 

window.addEventListener("load", () => Game.instance)