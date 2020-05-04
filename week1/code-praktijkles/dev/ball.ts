class Ball extends HTMLElement{

    private x : number = 0
    private y : number = 0

    constructor() {
        super()

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this)
    }
    public update() {
        console.log("Update ball")
        this.x++
        this.y++

        this.draw()
    }

    private draw() {
        this.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}

window.customElements.define("ball-component", Ball)