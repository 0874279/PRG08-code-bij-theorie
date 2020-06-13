/// <reference path="../gameobject.ts" />

class Notify extends GameObject {
    constructor() {
        super()

        this.x = 110
        this.y = 150

        this.draw()
    }
}

window.customElements.define("notification-component", Notify)