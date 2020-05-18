abstract class GameObject extends HTMLElement {
    
    // Fields
    private _x       : number    = 0
    private _y       : number    = 0
    private _speed   : number    = 0

     // Properties
     public get speed()  : number    { return this._speed }
     public set speed(v : number)    { this._speed = v; }
     

     public get x()      : number    { return this._x    }
     public set x(value  : number)   { this._x = value   }
 
     public get y()      : number    { return this._y    }
     public set y(value  : number)   { this._y = value   }
 
 
     public get width()  : number    { return this.clientWidth }
     public get height() : number    { return this.clientHeight }

    constructor() {
        super()

    }

    public move() {
        this.draw()
    }

    private draw() : void {
        this.style.transform =`translate(${this._x}px,${this._y}px)`
    }

    public hasCollision(gameobject : GameObject) : boolean {
        return (this._x < gameobject._x + gameobject.width &&
                this._x + this.width > gameobject._x &&
                this._y < gameobject._y + gameobject.height &&
                this._y + this.height > gameobject._y)
    }

    abstract onCollision(gameObject : GameObject) : void 
}