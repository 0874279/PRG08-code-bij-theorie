/// <reference path="gameobject.ts" />

class Phone extends GameObject{
    
    constructor() {
        super()

        this.x = Math.random() * (window.innerWidth - this.width)
        this.y = Math.random() * (window.innerHeight - this.height)
    }

    onCollision(gameObject: GameObject): void {
        if(gameObject instanceof Chicken) {
            this.delete()
        }
    }

    reset(): void {
        this.delete()
    }
}

window.customElements.define("phone-component", Phone as any)