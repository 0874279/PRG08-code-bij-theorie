/// <reference path="gameobject.ts" />

class House extends GameObject implements Observer{
    
    private subject : Subject

    constructor(subject : Subject) {
        super()

        this.x = 110
        this.y = 240

        this.subject = subject
        this.subject.register(this)

        this.draw()
    }

    notify(): void {
        new Notify()

        this.subject.unregister(this)
    }
}

window.customElements.define("house-component", House as any)