class Main {

    private balls : Ball[] = []
    private basketBall : Ball

    constructor() {
        
        this.balls.push(new Ball(0, window.innerWidth/2, new Bouncing()))
        this.balls.push(new Ball(window.innerWidth/2, window.innerWidth, new Space()))

        this.basketBall = new Ball(0, window.innerWidth, new Bouncing())
        this.gameLoop()
    }

    gameLoop() {
        for (const ball of this.balls) {
            ball.update()
        }

        if (this.basketBall.x > window.innerWidth / 2) {
            this.basketBall.ballBehaviour = new Space();
        } else {
            this.basketBall.ballBehaviour = new Bouncing();
        }

        this.basketBall.update()

        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => new Main())