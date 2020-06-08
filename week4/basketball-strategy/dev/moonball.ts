class MoonBall extends Ball {
    constructor(minWidth : number, maxWidth : number) {
        super(minWidth, maxWidth, new Space())
    }
}

window.customElements.define("moonball-component", MoonBall as any)