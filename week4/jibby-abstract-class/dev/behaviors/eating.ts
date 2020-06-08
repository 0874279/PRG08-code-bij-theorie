class Eating extends Behavior {

    constructor(jibby: Jibby) {
        super(jibby)

        this.jibby.foodDecrease = 0.1
        this.jibby.style.backgroundImage = "url('images/eating.gif')"
    }

    onWash() {

    }

    onPet() {

    }

    onEat() {
        // this.jibby.behavior = new Angry()
    }
}