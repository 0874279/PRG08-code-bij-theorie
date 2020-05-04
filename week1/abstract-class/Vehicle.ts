namespace AbstractClass {
    export abstract class Vehicle {

        protected type        : string       
        protected color       : string      
        protected horsepower  : number 

        constructor(type : string, color : string , horsepower : number) {
            this.type       = type
            this.color      = color
            this.horsepower = horsepower
        }

        abstract drive() : void
        abstract turn() : void
    }
}