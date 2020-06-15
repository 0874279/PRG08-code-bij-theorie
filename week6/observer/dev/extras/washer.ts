class Washer extends GameObject {
    constructor() {
        super()

        this.x = 315
        this.y = 35

        this.draw()

        setTimeout(() => {
            this.remove()
        }, 2000);
    }
}

window.customElements.define("washer-component", Washer)