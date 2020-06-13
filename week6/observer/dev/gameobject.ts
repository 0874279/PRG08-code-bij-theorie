abstract class GameObject extends HTMLElement{
    // Fields
    protected x: number = 0
    protected y: number = 0

    constructor() {
        super()

        let main  = document.getElementsByTagName("main")[0]
        main.appendChild(this);
    
    }

    public draw():void {
        this.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}