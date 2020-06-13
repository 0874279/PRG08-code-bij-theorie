/// <reference path="gameobject.ts" />

class Store extends GameObject implements Subject{
       
    private observers : Observer[] = []

    constructor() {
        super()

        this.x = 280
        this.y = 115

        this.addEventListener("click", () => this.newProduct())

        this.draw()
    }
    
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

    private newProduct() {
        new Washer()

        this.notifyObservers()
    }
}

window.customElements.define("store-component", Store)