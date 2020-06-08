abstract class Behavior {
    jibby:Jibby

    // De timer is per child te overschrijven
    public timer : number

    constructor(jibby: Jibby) {
        this.jibby = jibby
        this.timer = 100
    }

    performBehavior() {
        // Elk gedrag heeft een timer. 
        this.timer--
        if (this.timer <= 0 ){
            console.log("timer finished")
            
            this.onTimerFinished()
        }

        this.aging()
    }

    aging() {
        // waarden verlagen per frame - dit moet in het gedrag staan
        this.jibby.hygiene    += this.jibby.hygieneDecrease
        this.jibby.food       += this.jibby.foodDecrease
        this.jibby.happyness  += this.jibby.happynessDecrease

        // console.log(this.jibby.food)
    }

    // standaard gaat elk gedrag terug naar Idle als de timer afgelopen is
    // Eventueel kan je in de child dit overschrijven voor ook een 
    // onTimerFinished functie aan te maken 
    onTimerFinished() {
        this.jibby.behavior = new Idle(this.jibby)
    }

    // Door deze functies abstract te maken verplicht je de onderliggende 
    // classes om deze functie te implementeren
    abstract onWash()
    abstract onPet()
    abstract onEat()
}
