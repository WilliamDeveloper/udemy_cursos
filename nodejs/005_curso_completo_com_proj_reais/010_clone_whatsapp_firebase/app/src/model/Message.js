export class Message extends Model{
    constructor(){
        super()
    }

    get content(){ return this._data.content }
    set content(value){ this._data.content = value }

    get type(){ return this._data.type }
    set type(value){ this._data.type = value }

    get timeStamp(){ return this._data.timeStamp }
    set timeStamp(value){ this._data.timeStamp = value }

    get status(){ return this._data.status }
    set status(value){ this._data.status = value }
}