"use strict";
class GameObject extends HTMLElement {
    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        let main = document.getElementsByTagName("main")[0];
        main.appendChild(this);
    }
    draw() {
        this.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
class House extends GameObject {
    constructor(subject) {
        super();
        this.x = 110;
        this.y = 240;
        this.subject = subject;
        this.subject.register(this);
        this.draw();
    }
    notify() {
        new Notify();
        this.subject.unregister(this);
    }
}
window.customElements.define("house-component", House);
class Main {
    constructor() {
        console.log("Main created");
        let store = new Store();
        let website = new Website();
        store.register(website);
        new House(store);
    }
}
window.addEventListener("load", () => new Main());
class Store extends GameObject {
    constructor() {
        super();
        this.observers = [];
        this.x = 280;
        this.y = 115;
        this.addEventListener("click", () => this.newProduct());
        this.draw();
    }
    register(observer) {
        this.observers.push(observer);
    }
    unregister(observer) {
        let index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }
    notifyObservers() {
        for (const observer of this.observers) {
            observer.notify();
        }
    }
    newProduct() {
        new Washer();
        this.notifyObservers();
    }
}
window.customElements.define("store-component", Store);
class Website extends GameObject {
    constructor() {
        super();
        this.x = 350;
        this.y = 300;
        this.draw();
    }
    notify() {
        this.style.backgroundImage = "url(images/website-with-product.png)";
        setTimeout(() => {
            this.style.backgroundImage = "url(images/website.png)";
        }, 2000);
    }
}
window.customElements.define("website-component", Website);
class Notify extends GameObject {
    constructor() {
        super();
        this.x = 110;
        this.y = 150;
        this.draw();
        setTimeout(() => {
            this.remove();
        }, 2000);
    }
}
window.customElements.define("notification-component", Notify);
class Washer extends GameObject {
    constructor() {
        super();
        this.x = 315;
        this.y = 35;
        this.draw();
        setTimeout(() => {
            this.remove();
        }, 2000);
    }
}
window.customElements.define("washer-component", Washer);
//# sourceMappingURL=main.js.map