class WebSocketComponent extends Polymer.Element {
    static get is() { return 'websocket-service'; }

    constructor() {
        super();
        this.socket = null;
    }

    static get properties() {
        return {
            protocol: {
                type: String
            },
            url: {
                type: String
            },
            // protocols: {
            //     type: Array,
            //     value: () => []
            // }
        };
    }

    openConnection() {
        this.socket = new WebSocket(this.url, this.protocol);
        this.socket.onerror = this.onError.bind(this);
        this.socket.onopen = this.onOpen.bind(this);
        this.socket.onmessage = this.onMessage.bind(this);
    }

    onError(error) {
        this.dispatchEvent(new CustomEvent('on-error', {detail: error, bubbles: true, composed: true}));
    }

    onOpen(event) {
        this.dispatchEvent(new CustomEvent('on-open', {bubbles: true, composed: true}));
    }

    onMessage(event) {
       this.dispatchEvent(new CustomEvent('on-message', {detail: event.data, bubbles: true, composed: true}));
    }

    send(message) {
        this.socket.send(message);
    }

    close() {
        this.socket.close();
    }
}

window.customElements.define(WebSocketComponent.is, WebSocketComponent);
