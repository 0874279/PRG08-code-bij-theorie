abstract class Ball extends HTMLElement{

    public readonly gravity    : number = 0.1
    public readonly friction   : number = 0.9

    private _x           : number = 0
    private _y           : number = 0
    private _speedX      : number = 5
    private _speedY      : number = -3
    private _minWidth    : number = 0
    private _maxWidth    : number = 0
    private _maxHeight   : number = 0

    private _ballBehaviour: BallBehaviour

    public get x() : number { return this._x }
    public set x(x: number) { this._x = x }
    public get y() : number { return this._y }
    public set y(y:number) { this._y = y}
    public get speedX() : number { return this._speedX }
    public set speedX(sx: number) { this._speedX = sx}
    public get speedY() : number { return this._speedY }
    public set speedY(sy: number) { this._speedY = sy}
    public get minWidth() : number { return this._minWidth }
    public get maxWidth() : number { return this._maxWidth }
    public get maxHeight() : number { return this._maxHeight }
  
    public get ballBehaviour(): BallBehaviour {
        return this._ballBehaviour
    }
    public set ballBehaviour(value: BallBehaviour) {
        this._ballBehaviour = value
    }

    constructor(minWidth : number, maxWidth : number, ballBehaviour: BallBehaviour) {
        super()

        let content = document.getElementsByTagName("content")[0]
        content.appendChild(this)

        maxWidth -= this.clientWidth
        this.x = (Math.random() * (maxWidth - minWidth)) + minWidth
        this.y = 100

        this._minWidth   = minWidth
        this._maxWidth   = maxWidth
        this._maxHeight  = window.innerHeight - this.clientHeight

        this._ballBehaviour = ballBehaviour;
    }

    public update() : void {
        this.ballBehaviour.performUpdate(this);
    }

    public draw() {
        this.style.transform = "translate("+this.x+"px, "+this.y+"px)"
    }
}