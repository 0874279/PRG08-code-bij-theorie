class EarthBall extends Ball{
    constructor(minWidth : number, maxWidth : number) {
        super(minWidth, maxWidth, new Bouncing())
    }
}

window.customElements.define("earthball-component", EarthBall as any)