import {ClassEvent} from "../util/ClassEvent";

export class MicrophoneController extends ClassEvent{

    constructor(audioEl){
        super()

        this._audioEl = audioEl

        navigator.mediaDevices.getUserMedia({
            audio : true
        }).then( stream =>{
            console.log('stream ', stream)
            this._stream = stream

            let audio = new Audio()
            audio.srcObject = stream
            audio.play()

            this.trigger('play', audio)

        }).catch( error =>{
            console.log(error)
        })
    }

    stop(){
        this._stream.getTracks().forEach( track=>{
            track.stop()
        })
    }



}