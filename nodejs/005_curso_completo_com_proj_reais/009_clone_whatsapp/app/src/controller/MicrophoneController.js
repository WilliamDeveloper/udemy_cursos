import {ClassEvent} from "../util/ClassEvent";

export class MicrophoneController extends ClassEvent{

    constructor(audioEl){
        super()

        this._mimeType = 'audio/webm'
        this._available = false

        this._audioEl = audioEl

        navigator.mediaDevices.getUserMedia({
            audio : true
        }).then( stream =>{
            console.log('stream ', stream)
            this._available = true
            this._stream = stream

            let audio = new Audio()
            audio.srcObject = stream
            audio.play()

            this.trigger('play', audio)

        }).catch( error =>{
            console.log(error)
            this._available = false
        })
    }

    isAvailable(){
        return this._available
    }

    stop(){
        this._stream.getTracks().forEach( track=>{
            track.stop()
        })
    }

    startRecorder(){
        if ( this.isAvailable()){
            this._mediaRecorder = new MediaRecorder(this._stream, this._mimeType )
            this._recordedChunks = []
            this._mediaRecorder.addEventListener('dataavailable', e=>{
                if(e.data.size > 0){
                    this._recordedChunks.push(e.data)
                }
            })

            this._mediaRecorder.addEventListener('stop', e=>{
                let blob = new Blob(this._recordedChunks,{
                    type:this._mimeType
                })
                let fileName = `rec-${Date.now()}.webm`
                let file = new File([blob], fileName, {
                    type: this._mimeType,
                    lastModified: Date.now()
                })

            })
        }
    }

    stoptRecorder(){
        if ( this.isAvailable()){

        }
    }

}