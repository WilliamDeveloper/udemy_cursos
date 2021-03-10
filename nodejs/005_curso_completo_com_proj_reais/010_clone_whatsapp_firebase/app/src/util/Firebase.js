const firebase = require ('firebase')
require ('firebase/firestore')

import firebaseConfig from '../../config/firebaseconfig'

export class Firebase{
    constructor(config){
        if(!config) {
            this._config = firebaseConfig
        }else{
            this._config = config
        }

        this.init()
    }

    init(){
        firebase.initializeApp(this._config);
    }
}