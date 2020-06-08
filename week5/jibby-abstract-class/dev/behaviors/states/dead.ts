class Dead extends Behavior {

    constructor(jibby: Jibby) {
        super(jibby)
        console.log('dead')
        
        this.timer = 10

        this.jibby.style.backgroundImage = "url('images/dead.png')"
        speechSynthesis.speak(new SpeechSynthesisUtterance("O no! Jibby died. Go try again and love him some more."))
    }

    performBehavior() : void {
        
    }

    onWash() {
        
    }

    onPet() {

    }

    onEat() {

    }

    onTimerFinished() {
        // Jibby died. Reset?
    }
}