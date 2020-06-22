/// <reference path="gameobject.ts" />

class Zombie extends GameObject implements Observer{
    // Fields 
    private chicken   : Chicken

    private moveBehavior : MoveBehavior

    constructor(chicken:Chicken) {
        super()
        
        this.chicken = chicken
        this.moveBehavior = new MoveToPoint(this, Math.random() * 3 + 1)

        this.reset()

        // register zombie to the chicken
        this.chicken.register(this)
    }

    public update() : void {
        this.moveBehavior.move(this.chicken.x, this.chicken.y)

        super.update()
    }

    public notify() : void {
        // change behavior
        this.moveBehavior = new Wait(this)
        this.style.backgroundImage = `url("images/calling.png")`
        
        setTimeout(() => {
            this.moveBehavior = new MoveToPoint(this, Math.random() * 3 + 1)
            this.style.backgroundImage = `url("images/zombie.png")`
        }, 2000);
    }

    onCollision(gameObject: GameObject): void {
        if(gameObject instanceof Chicken) {
            Game.instance.gameOver()
        }
    }

    reset(): void {
        // Random x, op volledige breedte van het scherm
        this.x = Math.random() * (window.innerWidth - this.clientWidth)
        // Random y, vanaf halverwege het scherm tot onderaan het scherm
        this.y = Math.random() * (window.innerHeight/2) + (window.innerHeight/2-this.clientHeight)
    }
}

window.customElements.define("zombie-component", Zombie as any)