/// <reference path="tree.ts"/>

class Chicken {
    
    
    public div: HTMLElement
    private x:number
    private y:number

    private gun : Gun

    constructor(x:number, y:number, tree:Tree) {
        this.div = document.createElement("bird")
        tree.div.appendChild(this.div)
             
        this.x = x
        this.y = y
        
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`

        // this.gun = new Gun(this)
        // maak hier een click listener
        // de click event handler moet een gun toevoegen
        // als de kip al een gun heeft, dan moet de fire() functie van de gun worden aangeroepen
        this.div.addEventListener("click", () => this.handleClick())
    }

    handleClick(): void {
        console.log("Chicken click! ")
       
        if(!this.gun) {
            this.gun = new Gun(this)
        }
        this.gun.fire()
    }
}