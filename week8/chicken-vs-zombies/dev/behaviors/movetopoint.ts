class MoveToPoint implements MoveBehavior {
    private gameObject : GameObject
    private speedMultiplier : number

    constructor(gameObject : GameObject, speedMultiplier : number) {
        this.gameObject = gameObject
        this.speedMultiplier = speedMultiplier
    }

    public move(xPoint : number, yPoint : number) : void {
        this.calculateSpeedToPoint(xPoint, yPoint)
    }
    /**
     * Bepaalt de snelheid (en daarmee ook de richting) vanaf het huidige punt
     * naar het punt dat meegegeven wordt
     * @param xPoint x coordinaat van het punt waar naartoe verplaatst moet worden
     * @param yPoint y coordinaat van het punt waar naartoe verplaatst moet worden
     */
    public calculateSpeedToPoint(xPoint : number, yPoint : number) : void {
        let xdist = xPoint - this.gameObject.x
        let ydist = yPoint - this.gameObject.y
        let distance:number = Math.sqrt(xdist * xdist + ydist * ydist);

        this.gameObject.xspeed = xdist / distance
        this.gameObject.yspeed = ydist / distance
        
        this.gameObject.xspeed *= this.speedMultiplier
        this.gameObject.yspeed *= this.speedMultiplier

        // Is de snelheid op de x-as negatief, dan wordt direction -1
        // In de draw functie wordt dit gebruikt om de chicken naar links te laten kijken 
        // als deze naar links beweegt
        this.gameObject.direction = (this.gameObject.xspeed < 0) ? 1 : -1;
    }
}