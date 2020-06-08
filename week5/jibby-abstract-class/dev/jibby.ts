class Jibby extends HTMLElement{
    // Fields
    private _hygieneDecrease      : number = 0
    private _foodDecrease         : number = 0
    private _happynessDecrease    : number = 0
    
    private _hygiene    : number = 0
    private _food       : number = 0
    private _happyness  : number = 0
        
    // composite naar het gedrag van Jibby
    private _behavior : Behavior    

    // Properties
	public get behavior(): Behavior             { return this._behavior }
	public set behavior(value: Behavior)        { this._behavior = value }

    public get hygieneDecrease() : number       { return this._hygieneDecrease }
    public set hygieneDecrease(v : number)      { this._hygieneDecrease = v }

    public get foodDecrease() : number          { return this._foodDecrease }
    public set foodDecrease(v : number)         { this._foodDecrease = v }

    public get happynessDecrease() : number     { return this._happynessDecrease }
    public set happynessDecrease(v : number)    { this._happynessDecrease = v }

    public get hygiene(): number                { return this._hygiene }
    public set hygiene(value: number)           { this._hygiene = value }

    public get food(): number                   { return this._food}
    public set food(value: number)              { this._food = value}

    public get happyness(): number              { return this._happyness}
    public set happyness(value: number)         { this._happyness = value}

    constructor() {
        super()
        let container = document.getElementById("container")
        container.appendChild(this)

        // startwaarden van Jibby
        this._hygiene   = 20
        this._food      = 20
        this._happyness = 20

        // click listeners
        this.addEventListener("click", () => this.onPet())
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", () => this.onEat())
        document.getElementsByTagName("washbutton")[0].addEventListener("click", () => this.onWash())

        // hier het gedrag toekennen
        this._behavior = new Idle(this)
    }

    public update():void {
        // hier het gedrag updaten
        this._behavior.performBehavior()
        
        // check if Jibby died
        if(!(this._behavior instanceof Dead)) {
            if(this._happyness <= 0 || this._food <= 0 || this._hygiene <= 0) {
                this._behavior = new Dead(this)
            }
        }
    }


    private onPet():void {
        console.log("you clicked on jibby!")
        // hier moet je de onPet functie van het gedrag aanroepen
        this._behavior.onPet()
    }

    private onWash():void {
        console.log("washing jibby!")
        // hier moet je de onWash functie van het gedrag aanroepen
        this._behavior.onWash()
    }

    private onEat():void {
        console.log("jibby is eating!")
        // hier moet je de onEat functie van het gedrag aanroepen
        this._behavior.onEat()
    }
}

window.customElements.define("jibby-component", Jibby)
