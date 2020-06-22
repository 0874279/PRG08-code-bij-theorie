abstract class GameObject extends HTMLElement {
    // Fields 
    private _x        : number = 0
    private _y        : number = 0 

    protected _xspeed: number = 0
    protected _yspeed: number = 0
    protected _direction: number = 1
    
    // Properties
    public get x()      : number    { return this._x }
    public set x(v      : number)   { this._x = v }

    public get y()      : number    { return this._y }
    public set y(v      : number)   { this._y = v }

    public get xspeed() : number    { return this._xspeed }
    public set xspeed(v : number)   { this._xspeed = v }

    public get yspeed() : number    { return this._yspeed }
    public set yspeed(v : number)   { this._yspeed = v }

    public get direction(): number  { return this._direction }
    public set direction(v: number) { this._direction = v }

    public get width()  : number    { return this.clientWidth  }
    public get height() : number    { return this.clientHeight }
    
    constructor() {
        super()

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this)
    }

    public update() : void {
        this.x += this.xspeed
        this.y += this.yspeed
        
        this.draw()
    }

    private draw() : void {
        this.style.transform = "translate("+this.x+"px, "+this.y+"px) scale("+this.direction+",1)"
    }

    public hasCollision(gameobject : GameObject) : boolean {
        return (this._x < gameobject._x + gameobject.width &&
                this._x + this.width > gameobject._x &&
                this._y < gameobject._y + gameobject.height &&
                this._y + this.height > gameobject._y)
    }

    protected delete() : void {
        this.remove()
        Game.instance.removeGameObject(this)
    }

    abstract onCollision(gameObject : GameObject) : void 
    abstract reset() : void
}