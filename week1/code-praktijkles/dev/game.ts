class Game {
    private ball: Ball

    constructor() {
        console.log("Game created")

        this.ball = new Ball()
        
        this.gameloop()
    }

    private gameloop() {
        // console.log("hoi")
        this.ball.update()
        
        requestAnimationFrame(() => this.gameloop())
    }

}
window.addEventListener("load", () => new Game())