/// <reference path="gameobject.ts" />

class House extends GameObject implements Observer{
    constructor(subject : Subject) {
        super()

        this.x = 110
        this.y = 240

        subject.register(this)

        this.draw()
    }

    notify(): void {
        new Notify()
    }
}

window.customElements.define("house-component", House as any)