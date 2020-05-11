namespace PolymorphismFinal {
    class Main {

        private vehicles : Vehicle[] = []

        constructor() {
            this.vehicles.push(new Car())
            this.vehicles.push(new Plane(0))
            this.vehicles.push(new Plane(300))
            this.vehicles.push(new Plane(400))
            
            
            this.gameLoop()
        }

        private gameLoop() {
            for (const vehicle of this.vehicles) {
                vehicle.move()
            }

            requestAnimationFrame(() => this.gameLoop())
        }
    }

    window.addEventListener("load", () => new Main())
}

