class Hungry extends Behavior {

    constructor(jibby: Jibby) {
        super(jibby)

        this.jibby.foodDecrease *= 1.02

        this.timer = 10

        this.jibby.style.backgroundImage = "url('images/hungry.png')"
        speechSynthesis.speak(new SpeechSynthesisUtterance('Jibby is very hungry! Feed him!'))
    }

    performBehavior() {
        super.aging()
    }

    onWash() {
        
    }

    onPet() {

    }

    onEat() {
        this.jibby.behavior = new Eating(this.jibby)
    }
}