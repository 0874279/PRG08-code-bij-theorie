class Wait implements MoveBehavior {
    private gameObject : GameObject

    constructor(gameObject : GameObject) {
        this.gameObject = gameObject
    }

    move(xPoint: number = 0, yPoint: number = 0): void {
        this.gameObject.xspeed = 0
        this.gameObject.yspeed = 0
    }
}