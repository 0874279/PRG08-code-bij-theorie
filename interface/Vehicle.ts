namespace Interface {
    export interface Vehicle {
        // Deze interface definieert alleen functies 
        // die een class verplicht is te implementeren
        // een interface kan geen logica (code) bevatten
        drive() : void
        turn() : void
    }
}