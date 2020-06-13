class Main {

    constructor() {
        console.log("Main created")

        let store : Store = new Store()
        
        let website : Website = new Website()
        store.register(website)

        new House(store)
    }

}
window.addEventListener("load", () => new Main())