class Washing extends Behavior {

    constructor(jibby: Jibby) {
        super(jibby)

        this.timer = 200

        this.jibby.hygieneDecrease = 0.04
        this.jibby.style.backgroundImage = "url('images/washing.png')"
    }

    onWash() {

    }

    onPet() {

    }

    onEat() {
        this.jibby.behavior = new Angry(this.jibby)
    }
}