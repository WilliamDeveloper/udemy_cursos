export class CameraController {

    constructor(videoEl){
        this._videoEl = videoEl

        navigator.mediaDevices.getUserMedia({
            video : true
        }).then( stream =>{
            this._stream = stream


            // this._videoEl.src = stream
            this._videoEl.srcObject = stream
            this._videoEl.play()
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