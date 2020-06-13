class Washer extends GameObject {
    constructor() {
        super()

        this.x = 315
        this.y = 35

        this.draw()
    }
}

window.customElements.define("washer-component", Washer)