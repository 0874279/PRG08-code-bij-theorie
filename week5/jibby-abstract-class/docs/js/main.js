class Behavior {
    constructor(jibby) {
        this.jibby = jibby;
        this.timer = 100;
    }
    performBehavior() {
        this.timer--;
        if (this.timer <= 0) {
            console.log("timer finished");
            this.onTimerFinished();
        }
        this.aging();
    }
    aging() {
        this.jibby.hygiene += this.jibby.hygieneDecrease;
        this.jibby.food += this.jibby.foodDecrease;
        this.jibby.happyness += this.jibby.happynessDecrease;
    }
    onTimerFinished() {
        this.jibby.behavior = new Idle(this.jibby);
    }
}
class Game {
    constructor() {
        this.jibby = new Jibby();
        requestAnimationFrame(() => this.gameLoop());
    }
    gameLoop() {
        this.jibby.update();
        this.updateUI();
        requestAnimationFrame(() => this.gameLoop());
    }
    updateUI() {
        document.getElementsByTagName("food")[0].innerHTML = Math.round(this.jibby.food).toString();
        document.getElementsByTagName("happyness")[0].innerHTML = Math.round(this.jibby.happyness).toString();
        document.getElementsByTagName("hygiene")[0].innerHTML = Math.round(this.jibby.hygiene).toString();
    }
}
window.addEventListener("load", () => new Game());
class Jibby extends HTMLElement {
    constructor() {
        super();
        this._hygieneDecrease = 0;
        this._foodDecrease = 0;
        this._happynessDecrease = 0;
        this._hygiene = 0;
        this._food = 0;
        this._happyness = 0;
        let container = document.getElementById("container");
        container.appendChild(this);
        this._hygiene = 20;
        this._food = 20;
        this._happyness = 20;
        this.addEventListener("click", () => this.onPet());
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", () => this.onEat());
        document.getElementsByTagName("washbutton")[0].addEventListener("click", () => this.onWash());
        this._behavior = new Idle(this);
    }
    get behavior() { return this._behavior; }
    set behavior(value) { this._behavior = value; }
    get hygieneDecrease() { return this._hygieneDecrease; }
    set hygieneDecrease(v) { this._hygieneDecrease = v; }
    get foodDecrease() { return this._foodDecrease; }
    set foodDecrease(v) { this._foodDecrease = v; }
    get happynessDecrease() { return this._happynessDecrease; }
    set happynessDecrease(v) { this._happynessDecrease = v; }
    get hygiene() { return this._hygiene; }
    set hygiene(value) { this._hygiene = value; }
    get food() { return this._food; }
    set food(value) { this._food = value; }
    get happyness() { return this._happyness; }
    set happyness(value) { this._happyness = value; }
    update() {
        this._behavior.performBehavior();
        if (!(this._behavior instanceof Dead)) {
            if (this._happyness <= 0 || this._food <= 0 || this._hygiene <= 0) {
                this._behavior = new Dead(this);
            }
        }
    }
    onPet() {
        console.log("you clicked on jibby!");
        this._behavior.onPet();
    }
    onWash() {
        console.log("washing jibby!");
        this._behavior.onWash();
    }
    onEat() {
        console.log("jibby is eating!");
        this._behavior.onEat();
    }
}
window.customElements.define("jibby-component", Jibby);
class Eating extends Behavior {
    constructor(jibby) {
        super(jibby);
        this.jibby.foodDecrease = 0.1;
        this.jibby.style.backgroundImage = "url('images/eating.gif')";
    }
    onWash() {
    }
    onPet() {
    }
    onEat() {
    }
}
class Idle extends Behavior {
    constructor(jibby) {
        super(jibby);
        this.jibby.hygieneDecrease = -0.01;
        this.jibby.foodDecrease = -0.02;
        this.jibby.happynessDecrease = -0.015;
        this.timer = 1000;
        this.jibby.style.backgroundImage = "url('images/idle.png')";
    }
    performBehavior() {
        super.performBehavior();
        if (this.jibby.hygiene <= 10) {
            this.jibby.behavior = new Dirty(this.jibby);
        }
        if (this.jibby.food <= 10) {
            this.jibby.behavior = new Hungry(this.jibby);
        }
        if (this.jibby.happyness <= 10) {
            this.jibby.behavior = new Sad(this.jibby);
        }
    }
    onWash() {
        this.jibby.behavior = new Washing(this.jibby);
    }
    onPet() {
        this.jibby.behavior = new Petting(this.jibby);
    }
    onEat() {
        this.jibby.behavior = new Eating(this.jibby);
    }
    onTimerFinished() {
    }
}
class Petting extends Behavior {
    constructor(jibby) {
        super(jibby);
        this.timer = 200;
        this.jibby.happynessDecrease = 0.08;
        this.jibby.style.backgroundImage = "url('images/happy.png')";
    }
    onWash() {
        this.jibby.behavior = new Washing(this.jibby);
    }
    onPet() {
    }
    onEat() {
    }
}
class Washing extends Behavior {
    constructor(jibby) {
        super(jibby);
        this.timer = 200;
        this.jibby.hygieneDecrease = 0.04;
        this.jibby.style.backgroundImage = "url('images/washing.png')";
    }
    onWash() {
    }
    onPet() {
    }
    onEat() {
        this.jibby.behavior = new Angry(this.jibby);
    }
}
class Angry extends Behavior {
    constructor(jibby) {
        super(jibby);
        this.jibby.happynessDecrease = -0.1;
        this.timer = 100;
        this.jibby.style.backgroundImage = "url('images/angry.png')";
        speechSynthesis.speak(new SpeechSynthesisUtterance('Jibby is so angry! The only thing left to do is hug him.'));
    }
    performBehavior() {
        super.aging();
    }
    onWash() {
    }
    onPet() {
        this.jibby.behavior = new Petting(this.jibby);
    }
    onEat() {
    }
}
class Dead extends Behavior {
    constructor(jibby) {
        super(jibby);
        console.log('dead');
        this.timer = 10;
        this.jibby.style.backgroundImage = "url('images/dead.png')";
        speechSynthesis.speak(new SpeechSynthesisUtterance("O no! Jibby died. Go try again and love him some more."));
    }
    performBehavior() {
    }
    onWash() {
    }
    onPet() {
    }
    onEat() {
    }
    onTimerFinished() {
    }
}
class Dirty extends Behavior {
    constructor(jibby) {
        super(jibby);
        this.jibby.hygieneDecrease = -0.01;
        this.timer = 10;
        this.jibby.style.backgroundImage = "url('images/dirty.png')";
        speechSynthesis.speak(new SpeechSynthesisUtterance('Jibby feels dirty, wash him please!'));
    }
    performBehavior() {
        super.aging();
    }
    onWash() {
        this.jibby.behavior = new Washing(this.jibby);
    }
    onPet() {
    }
    onEat() {
    }
}
class Hungry extends Behavior {
    constructor(jibby) {
        super(jibby);
        this.jibby.foodDecrease *= 1.02;
        this.timer = 10;
        this.jibby.style.backgroundImage = "url('images/hungry.png')";
        speechSynthesis.speak(new SpeechSynthesisUtterance('Jibby is very hungry! Feed him!'));
    }
    performBehavior() {
        super.aging();
    }
    onWash() {
    }
    onPet() {
    }
    onEat() {
        this.jibby.behavior = new Eating(this.jibby);
    }
}
class Sad extends Behavior {
    constructor(jibby) {
        super(jibby);
        this.jibby.happynessDecrease *= 1.002;
        this.timer = 10;
        this.jibby.style.backgroundImage = "url('images/sad.png')";
        speechSynthesis.speak(new SpeechSynthesisUtterance('Jibby is so sad, he can cry all day long!'));
    }
    performBehavior() {
        super.aging();
    }
    onWash() {
    }
    onPet() {
        this.jibby.behavior = new Petting(this.jibby);
    }
    onEat() {
    }
}
//# sourceMappingURL=main.js.map