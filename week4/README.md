# PRG08 Strategy pattern

[Codevoorbeeld](strategy-planes) waarbij het Strategy Pattern is toegepast op een class `Plane`. 

- `Plane` heeft een uitbreiding op basis van een compositie. Dit is een variabele van het type `FlyBehavior`
- Doordat we 'tegen deze *Interface* programmeren', kunnen we het gedrag 'on runtime' wisselen
- Elk gedrag onder de Interface `FlyBehavior` heeft de functie `getNextBehavior()`
- Als deze functie wordt aangeroepen, zal deze functie het volgende gedrag teruggeven waar naartoe gewisseld moet worden.
```
class Normal implements FlyBehavior {
        private plane : Plane
        
        constructor(plane : Plane) {
            this.plane = plane
        }
        getNextBehavior(): FlyBehavior {
            return new Stunt(this.plane)
        }
}
```