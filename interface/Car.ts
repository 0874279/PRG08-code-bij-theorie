namespace Interface {
    export class Car implements Vehicle{

        private type        : string       
        private color       : string      
        private horsepower  : number 
        
        private frontRight:Wheel 

        constructor(type : string, color : string , horsepower : number) {
            this.type       = type
            this.color      = color
            this.horsepower = horsepower

            this.frontRight = new Wheel()
        }
        
        drive(): void {
            // Deze class MOET deze functie bevatten
        }
        turn(): void {
            // Deze class MOET deze functie bevatten
        }
    }

    let carFerrari : Car = new Car('Ferrari F8', 'Red', 710)
    let carPorsche : Car = new Car('Porsche 992', 'Silver', 444)
}
