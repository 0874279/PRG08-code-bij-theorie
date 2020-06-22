/// <reference path="gameobject.ts" />

class Grain extends GameObject{
    constructor() {
        super()

        this.x = Math.random() * (window.innerWidth - this.width)
        this.y = Math.random() * (window.innerHeight - this.height)
    }

    onCollision(gameObject: GameObject): void {
        if(gameObject instanceof Chicken) {
            Game.instance.addPoint()
            this.delete()
        }
    }

    reset(): void {
        this.delete()
    }
}

window.customElements.define("grain-component", Grain as any)