class Sad extends Behavior {

    constructor(jibby: Jibby) {
        super(jibby)

        this.jibby.happynessDecrease *= 1.002

        this.timer = 10

        this.jibby.style.backgroundImage = "url('images/sad.png')"
        speechSynthesis.speak(new SpeechSynthesisUtterance('Jibby is so sad, he can cry all day long!'))
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