class MessageBoard extends HTMLElement {

    // variabele kan NIET altijd aangeroepen worden (object moet bestaan omdat hij daarbij hoort)
    private messages: string[] = []

    // variabele kan altijd aangeroepen worden (ook als object nog niet bestaat)
    private static _instance: MessageBoard;

    private constructor() {
        super();

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this)
    }

    // method kan altijd aangeroepen worden (ook als object nog niet bestaat)
    public static getInstance(): MessageBoard {
        if (!MessageBoard._instance) {
            MessageBoard._instance = new MessageBoard();
        }
        return MessageBoard._instance;
    }

    public addMessage(messageText: string) {
        // plaatst bericht achteraan
        //this.messages.push(messageText);

        // plaatst bericht vooraan
        this.messages.splice(0, 0, messageText);

        this.updateMessages();
    }

    private updateMessages() {
        this.innerHTML = "";

        for (const message of this.messages) {
            console.log("Message: " + message);

            let messageElement = document.createElement("message");
            messageElement.innerHTML = message;

            this.appendChild(messageElement);
        }

    }

}

window.customElements.define("messageboard-component", MessageBoard as any)