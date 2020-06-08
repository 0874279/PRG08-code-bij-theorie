class Dirty extends Behavior {

    constructor(jibby: Jibby) {
        super(jibby)

        this.jibby.hygieneDecrease = -0.01

        this.timer = 10

        this.jibby.style.backgroundImage = "url('images/dirty.png')"
        speechSynthesis.speak(new SpeechSynthesisUtterance('Jibby feels dirty, wash him please!'))
    }

    performBehavior() {
        super.aging()
    }
    
    onWash() {
        this.jibby.behavior = new Washing(this.jibby)
    }

    onPet() {

    }

    onEat() {
        
    }
}