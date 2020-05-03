namespace Inheritance {

    export class Vehicle {

        protected type        : string       
        protected color       : string      
        protected horsepower  : number 

        constructor(type : string, color : string , horsepower : number) {
            this.type       = type
            this.color      = color
            this.horsepower = horsepower
        }

        // Wanneer je in een parent class een functie opneemt
        // zal de child class deze functie erven. 
        // Op dit moment is de functie leeg dus zal er bij het 
        // aanroepen niks gebeuren. 
        // Dit is ook meteen het gevaar. Als de child class geen
        // invulling geeft aan de functie gebeurt er niks.
        protected drive() : void {

        }
        protected turn() : void {

        }
    }

}