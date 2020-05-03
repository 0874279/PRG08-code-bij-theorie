namespace AbstractClass {
    export class Car extends Vehicle{

        private frontRight:Wheel 

        constructor(type: string, color: string, horsepower: number) {
            super(type, color, horsepower)

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


