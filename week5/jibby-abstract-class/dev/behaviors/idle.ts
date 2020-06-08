class Idle extends Behavior {

    constructor(jibby: Jibby) {
        super(jibby)

        this.jibby.hygieneDecrease    = -0.01
        this.jibby.foodDecrease       = -0.02
        this.jibby.happynessDecrease  = -0.015

        this.timer = 1000

        this.jibby.style.backgroundImage = "url('images/idle.png')"
    }

    performBehavior() {
        super.performBehavior()

        if(this.jibby.hygiene <= 10) {
            this.jibby.behavior = new Dirty(this.jibby)
        }
        if(this.jibby.food <= 10) {
            this.jibby.behavior = new Hungry(this.jibby)
        }
        if(this.jibby.happyness <= 10) {
             this.jibby.behavior = new Sad(this.jibby)
        }
    }

    onWash() {
        this.jibby.behavior = new Washing(this.jibby)
    }

    onPet() {
        this.jibby.behavior = new Petting(this.jibby)
    }

    onEat() {
        this.jibby.behavior = new Eating(this.jibby)
    }

    onTimerFinished() {
        
    }
}