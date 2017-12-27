

class PictureDetailComponent extends Polymer.mixinBehaviors([PipesModule], Polymer.Element) {

    static get is() {
        return 'picture-detail';
    }

    static get properties() {
        return {
            item: {
                type: Object,
                value: () => {}
            }
        };
    }

    // static get listeners() {
    //     return {
    //         'ing-add-item': '_addItem'
    //     };
    // }

    constructor() {
        super();
        this.PictureDetailComponent();
    }

    PictureDetailComponent() {
        // this.tick = () => {
        // }

        // this.ready = () => {
        //     super.ready();
        //     // this._onMessage = this._onMessage.bind(this); // to preserve this context
        //     this.$.getData.addEventListener('on-message', e => {this._onMessage(e);});
        //     // debugger
        //     this.$.getData.openConnection();
        //     // this.$.websocket.open();
        // };

        // this._addItem = (e) => {
        //     // this.push('items', e.detail.message);
        //     this.items = [...this.items, e.detail.message];
        // };

        // this._onMessage = (data) => {
        //     // this.push('items', data.detail);
        //     this.items = [...this.items, data.detail];
        //
        //     // this.dispatchEvent(new CustomEvent('ing-add-item', {
        //     //     detail: {message: data.data},
        //     //     bubbles: true,
        //     //     composed: true
        //     // }));
        // };
    }



}

window.customElements.define(PictureDetailComponent.is, PictureDetailComponent);
