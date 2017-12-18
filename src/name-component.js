import {Greeter} from './greeter.js';
// import {Observable} from '../node_modules/@reactivex/rxjs/dist/es6/Rx.js';
// import * as Rx from '../node_modules/@reactivex/rxjs/dist/global/Rx.js';
// import {Rx} from '../node_modules/rxjs/bundles/Rx';
// import * as RxJS from '../node_modules/rxjs/bundles/Rx.min.js';
 // import {Rx} from 'rxjs/Rx';
// import Rx from 'rxjs/Rx';s
// import {*} from '../bower_components/rxjs/dist/rx.lite.js';
// import Rx from 'rxjs/Rx';

class NameComponent extends Polymer.Element {
    static get is() {return 'name-component';}
    static get properties() {
        return {
            firstname: {
                'type': String,
                'notify': true
            },
            lastname: {
                'type': String,
                'notify': true,
                'observer': 'lastNameChanged'
            }
        };
    }
    lastNameChanged($newValue, $oldValue) {
        console.log(`lastname has changed in namecomponent from ${$oldValue} to ${$newValue}`);
    }
    constructor() {
        super();


        let test = Rx.Observable.from([1, 2, 3, 4, 5]);
        test.subscribe(val => {
           console.log((val));
        });

        // greet.sayHello();
        const greet = new Greeter();
        console.log(greet.sayHello());
    }

    test() {
        return 'test string';
    }
}

export {NameComponent};

