class Petting extends Behavior {

    constructor(jibby: Jibby) {
        super(jibby)
        
        this.timer = 200
        this.jibby.happynessDecrease  = 0.08

        this.jibby.style.backgroundImage = "url('images/happy.png')"
    }

    onWash() {
        this.jibby.behavior = new Washing(this.jibby)
    }

    onPet() {
        
    }

    onEat() {

    }
}