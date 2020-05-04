namespace Inheritance {
    export class Car extends Vehicle{

        private frontRight:Wheel 

        constructor(type: string, color: string, horsepower: number) {
            super(type, color, horsepower)

            this.frontRight = new Wheel()
        }
        
        // de child class heeft ook de functie opgenomen.
        // Op dit moment overschrijft de child class de 
        // functionaliteit van de parent.
        protected drive(): void {
            console.log("I am driving")
        }
        protected turn(): void {
            console.log("I am turning")
        }
    }

    let carFerrari : Car = new Car('Ferrari F8', 'Red', 710)
    let carPorsche : Car = new Car('Porsche 992', 'Silver', 444)
}
