
import {Model} from "./Model";
import {Firebase} from "../util/Firebase";

export class Chat extends Model{
    constructor(){
        super()
    }

    get users() { return this._data.users }
    set users(value) { this._data.users = value}

    get timeStamp() { return this._data.timeStamp }
    set timeStamp(value) { this._data.timeStamp = value}

    static getRef(){
        return Firebase.db().connection('/chats')
    }

    static createIfNotExists(email, contactEmail){
        return new Promise((resolve, reject)=>{
            Chat.find(email, contactEmail).then( chats =>{
                if(chats.empty){
                    Chat.create(email, contactEmail).then(chat =>{
                        resolve(chat)
                    })
                }else{
                    chats.forEach(chat=>{
                        resolve(chat)
                    })
                }
            })
        }).catch(error=>{
            reject(error)
        })
    }

    static find(email, contactEmail){

    }

    static create(email, contactEmail){

    }


}