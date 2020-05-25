namespace StrategyFinal {
    class Main {

        private planes : Plane[] = []

        constructor() {
            this.planes.push(new Plane(0  , 150))
            this.planes.push(new Plane(300, 50))
            this.planes.push(new Plane(400, 100))
            
            
            this.gameLoop()
        }

        private gameLoop() {
            for (const plane of this.planes) {
                plane.move()

                if(plane.x < 580 - plane.clientWidth) {
                    if(!plane.isAboveLand) {
                        plane.behavior = plane.behavior.getNextBehavior()
                        plane.isAboveLand = true
                    }
                } else {
                    if(plane.isAboveLand) {
                        plane.behavior = plane.behavior.getNextBehavior()
                        plane.isAboveLand = false
                    }
                }
            }

            requestAnimationFrame(() => this.gameLoop())
        }
    }

    window.addEventListener("load", () => new Main())
}

