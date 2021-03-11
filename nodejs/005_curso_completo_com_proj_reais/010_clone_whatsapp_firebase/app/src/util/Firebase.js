// const firebase = require ('firebase/app')
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase";

// vai ficar no logar no realtime database
require ('firebase/firestore')

import firebaseConfig from '../../config/firebaseconfig'

export class Firebase{
    constructor(config){
        if(!config) {
            this._config = firebaseConfig
        }else{
            this._config = config
        }

        console.log(this._config)

        this.init()
    }

    init(){
        if(!this._initialized){
            firebase.initializeApp(this._config);
            firebase.firestore().settings({
                timestampsInSnapshots: true
            })
            this._initialized=true
        }
    }

    static db(){
        return firebase.firestore()
    }

    static hd(){
        return firebase.storage();
    }
}