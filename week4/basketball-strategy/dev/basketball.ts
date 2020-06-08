class BasketBall extends Ball{
    constructor(minWidth : number, maxWidth : number) {
        super(minWidth, maxWidth, new Bouncing())
    }
}

window.customElements.define("basketball-component", BasketBall as any)