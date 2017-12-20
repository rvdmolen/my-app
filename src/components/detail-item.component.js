

class DetailItemComponent extends Polymer.Element {



    static get is() {
        return 'detail-item';
    }

    static get properties() {
        return {
            items: {
                type: Array,
                value: []
            }
        };
    }

    static get listeners() {
        return {
            'ing-add-item': '_addItem'
        };
    }

    constructor() {
        super();
        this.DetailItemComponent();
    }

    DetailItemComponent() {
        // this.tick = () => {
        // }

        this.ready = () => {
            super.ready();
            // this._onMessage = this._onMessage.bind(this); // to preserve this context
            this.$.getData.addEventListener('on-message', e => {this._onMessage(e)});
            // debugger
            this.$.getData.openConnection();
            // this.$.websocket.open();
        };

        this._addItem = (e) => {
            // this.push('items', e.detail.message);
            this.items = [...this.items, e.detail.message];
        };

        this._onMessage = (data) => {
            console.log(data.detail);
            console.log(this.$);
            // this.push('items', data.detail);
            this.items = [...this.items, data.detail];

            // this.dispatchEvent(new CustomEvent('ing-add-item', {
            //     detail: {message: data.data},
            //     bubbles: true,
            //     composed: true
            // }));
        };
    }









}

window.customElements.define(DetailItemComponent.is, DetailItemComponent);
