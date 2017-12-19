class WebSocketComponent extends Polymer.Element {
    static get is() { return 'websocket-service'; }

    //socket = null;
    static get socket() {
        return null;
    }

    constructor() {
        super();
    }

    static get properties() {
        return {
            protocol: {
                type: String
            },
            url: {
                type: String
            }
        }
    }

 //   ready () {
//            this.socket = new WebSocket(this.url, this.protocol);
//            this.socket.onerror = this.onError.bind(this);
//            this.socket.onopen = this.onOpen.bind(this);
//            this.socket.onmessage = this.onMessage.bind(this);
 //   }

    openConnection = function() {
        this.socket = new WebSocket(this.url, this.protocol);
        this.socket.onerror = this.onError.bind(this);
        this.socket.onopen = this.onOpen.bind(this);
        this.socket.onmessage = this.onMessage.bind(this);
    }

    onError = function (error) {
        this.fire('onerror', error);
    }

    onOpen = function (event) {
        this.fire('onopen');
    }

    onMessage = function (event) {
        this.fire('onmessage', event.data);
    }

    send = function (message) {
        this.socket.send(message);
    }

    close = function () {
        this.socket.close();
    }
}

window.customElements.define(WebSocketComponent.is, WebSocketComponent);