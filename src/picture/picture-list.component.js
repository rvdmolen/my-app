class PictureListComponent extends Polymer.Element {

    static get is() {
        return 'picture-list';
    }

    static get properties() {
        return {
            items: {
                type: Array,
                value: []
            }
        };
    }

    constructor() {
        super();
        this.PictureListComponent();
    }

    PictureListComponent() {

        // ready life cycle hook
        this.ready = () => {
            super.ready();
            this.$.getData.addEventListener('on-message', e => {this._onMessage(e);});
            this.$.getData.openConnection();
        };

        // message even from websocket
        this._onMessage = (data) => this.items = [...this.items, JSON.parse(data.detail)];
    }
}

window.customElements.define(PictureListComponent.is, PictureListComponent);
