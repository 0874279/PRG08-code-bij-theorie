/// <reference path="gameobject.ts" />

class Chicken extends GameObject implements Subject{
    // Fields
    private observers : Observer[] = []
    private moveBehavior : MoveBehavior

    constructor() {
        super()

        this.moveBehavior = new MoveToPoint(this, 5)
        
        window.addEventListener("click", (e:MouseEvent) => this.onWindowClick(e))
    }
    
    private onWindowClick(e:MouseEvent) : void {
        // Berekening van de snelheid waar naartoe verplaatst moet worden (positie muisklik)
        this.moveBehavior.move(e.clientX, e.clientY)
    }

    onCollision(gameObject: GameObject): void {
        if(gameObject instanceof Phone) {
            this.notifyObservers()
        }
    }

    public reset() : void {
        this.x = 0
        this.y = 0
        this.xspeed = 0
        this.yspeed = 0
    }

    // Subject functions
    register(observer: Observer): void {
        this.observers.push(observer)
    }
    unregister(observer: Observer): void {
        let index = this.observers.indexOf(observer)
        this.observers.splice(index, 1)
    }
    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.notify()
        }
    }
}

window.customElements.define("chicken-component", Chicken as any)