# PRG08 Chicken vs Zombies
Oefentoets voor programmeren 8. Verwerk hierin het strategy, singleton en observer pattern.

![Chicken vs zombies](runchickenrun.png)

## Spelregels
- De kip beweegt naar de plek waar geklikt wordt. 
- Pak met de kip zo veel mogelijk graankorrels op. Elke korrel is een punt. 
- Wordt de kip geraakt door een zombie, dan is het game over. De kip wordt gereset en de score gaat terug naar 0
- Zombies bewegen standaard richting de kip en zijn aan het 'jagen'
- Pakt de kip een telefoon op, dan verdwijnt de telefoon. Ook krijgen alle zombies een nieuw Facebookbericht en blijven 2 seconden op dezelfde plek stil staan om naar hun telefoon te kijken. Na deze 2 seconden gaan ze automatisch weer jagen. 

## Startwaarden
- Kip begint op plek (0, 0)
- Zombies worden random in de onderste helft van het scherm geplaatst
- Telefoons worden willekeurig in het veld geplaatst, elke 5 seconden. Gebruik hiervoor de functie `setTimeout(() => { // new Phone() }, 5000)`
- Graankorrels worden willekeurig in het veld geplaatst, elke 3 seconden. 