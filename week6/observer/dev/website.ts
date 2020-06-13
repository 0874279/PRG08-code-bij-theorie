/// <reference path="gameobject.ts" />

class Website extends GameObject implements Observer{
    constructor() {
        super()

        this.x = 350
        this.y = 300

        this.draw()

    }

    notify(): void {
        this.style.backgroundImage = "url(images/website-with-product.png)"
    }

}

window.customElements.define("website-component", Website)