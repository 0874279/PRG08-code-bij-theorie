# PRG08-Herhaling-OOP
Herhaling van de onderwerpen uit leerjaar 1 en 2

3 voorbeelden waarbij een class **Car** gebruik maakt van een parent **Vehicle**

- [inheritance](inheritance)
- [interface](interface)
- [abstract class](abstract-class)

## Inheritance

Mogelijkheid om gemeenschappelijke code onder te brengen in een parent class

- Je kunt op een eenvoudige manier een bestaand object aanpassen, als je een specifieke variant wilt maken, zonder dat je bestaande code hoeft aan te passen.
- Als je de code spreidt over meerdere classes (parent en child), wordt per object de complexiteit lager. Spreiding van verantwoordelijkheid.
- Wil je code aanpassen dan hoef je dat maar op 1 plek te doen
- Je kunt de parent makkelijk uitbreiden met een nieuwe child

## Interface

Definieert het gedrag van een class. 

- Handig als je classes gemeenschappelijk wilt kunnen behandelen, maar er geen default functionaliteit is.
- Makkelijk op te zetten. Je hoeft nog niet na te denken over logica.
- Je kunt bij een class, die de interface implementeert, bepaalde functies afdwingen. 
- Een class kan meerdere interfaces implementeren. Als je een interface als afspraak ziet, kun je een class opbouwen die aan meerdere afspraken moet voldoen.

## Abstract class

Kan zowel abstract als non-abstract members hebben

- Heeft het voordeel van een interface wanneer een functie abstract gemaakt is. Een child class moet de functie implmenteren. 
- De abstracte class is eventueel te hergebruiken (als bouwblok) in een ander project
- Kan logica bevatten, zodat de logica op 1 plek staat (zie voordeel inheritance)
- Een child class kan maar van 1 abstract class erven (nadeel ten opzichte van een interface)
- Van een abstract class kan je geen object maken

## Polymophism

In alle voorbeeld is er gebruik te maken van het voordeel van polymorfisme. Een child class kan hernoemt worden naar zijn parent waardoor verschillende type childs uniform aan te spreken zijn. 

Stel er is niet alleen een **Car** class, maar ook een class **Truck** en **Plane**, dan is het volgende mogelijk
```
let car : Vehicle = new Car()
let truck : Vehicle = new Truck()
let plane : Vehicle = new Plane()

let vehicles : Vehicle[] = []

vehicles.push(car)
vehicles.push(truck)
vehicles.push(plane)

for(let vehicle of vehicles) {
    vehicle.drive()
}
```

## Namespaces

Om in het zelfde project gebruik te kunnen maken van meerdere classes met de naam **Car**, is er gebruik gemaakt van een **Namespace**. Op deze manier is het mogelijk om een class name meerdere keren te kunnen gebruiken. de classes moeten dan ondergebracht zijn in verschillende namespaces. De class of interface moet voorzien zijn van het keyword **export**. 
