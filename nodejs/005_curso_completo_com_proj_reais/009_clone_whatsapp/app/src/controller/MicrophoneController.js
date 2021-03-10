import {ClassEvent} from "../util/ClassEvent";

export class MicrophoneController extends ClassEvent{

    constructor(videoEl){
        super()

        this._videoEl = videoEl

        navigator.mediaDevices.getUserMedia({
            audio : true
        }).then( stream =>{
            this._stream = stream

            let audio = new Audio()
            audio.srcObject = stream

            audio.play()

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