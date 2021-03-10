const path = require('path')

const pdfjsLib = require('pdfjs-dist')
pdfjsLib.GlobalWorkerOptions.workerSrc = path.resolve(__dirname,'../../dist/pdf.worker.bundle.js' )

export class DocumentPreviewController{
    constructor(file){
        this._file = file
    }

    getPreviewData(){
        return new Promise((resolve, reject)=>{
            let reader
            switch (this._file.type) {
                case    'image/png' :
                case    'image/jpeg' :
                case    'image/jpg' :
                case    'image/gif' :
                    reader = new FileReader()
                    reader.onload = e =>{
                        resolve({
                            src : reader.result,
                            info: this._file.name
                        })
                    }
                    reader.onerror= e=>{
                        reject(e)
                    }
                    reader.readAsDataURL(this._file)

                break

                case    'application/pdf' :

                    reader = new FileReader()
                    reader.onload = e =>{
                        pdfjsLib.getDocument( new Uint8Array(reader.result)).promise.then(pdf=>{
                            console.log('pdf ', pdf)
                        }).catch(error =>{
                            reject(error)
                        })
                    }
                    reader.readAsArrayBuffer(this._file)
                break

                default:

                    reject()


            }
        })
    }
}