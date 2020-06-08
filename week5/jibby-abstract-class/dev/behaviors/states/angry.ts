class Angry extends Behavior {

    constructor(jibby: Jibby) {
        super(jibby)

        this.jibby.happynessDecrease = -0.1
        this.timer = 100

        this.jibby.style.backgroundImage = "url('images/angry.png')"
        speechSynthesis.speak(new SpeechSynthesisUtterance('Jibby is so angry! The only thing left to do is hug him.'))
    }

    performBehavior() {
        super.aging()
    }
    
    onWash() {
        
    }

    onPet() {
        this.jibby.behavior = new Petting(this.jibby)
    }

    onEat() {

    }
}