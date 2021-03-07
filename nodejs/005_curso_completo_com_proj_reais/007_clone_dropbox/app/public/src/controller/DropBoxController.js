class DropBoxController{

    constructor(){
        this.btnSendFileEl = document.querySelector('#btn-send-file')
        this.inputFilesEl = document.querySelector('#files')
        this.snackModalEl = document.querySelector('#react-snackbar-root')
        this.progressBarEl = this.snackModalEl.querySelector('.mc-progress-bar-fg')

        this.initEvents()
    }

    initEvents(){
        this.btnSendFileEl.addEventListener('click', event => {
            this.inputFilesEl.click()
        })

        this.inputFilesEl.addEventListener('change', event =>{
            console.log('event ', event.target.files )

            this.uploadTask( event.target.files)

            this.snackModalEl.style.display = 'block'
        })
    }


    uploadTask(files){

        let promises = []

        Array.prototype.forEach.call(files , (file) => {
            promises.push( new Promise((resolve, reject)=>{
                let ajax = new XMLHttpRequest()
                ajax.open('POST', '/upload')
                ajax.onload = event =>{
                    try{
                        resolve(JSON.parse(ajax.responseText))
                    }catch (e) {
                        reject(e)
                    }
                }
                ajax.onerror = event =>{
                    reject(event)
                }

                ajax.upload.onprogress = event =>{
                    console.log('onprogress',event)
                    this.uploadProgress(event,file)
                }

                let formData = new FormData()
                formData.append('input-file',file)

                ajax.send(formData)

            }))

        })

        return Promise.all(promises)

    }


    uploadProgress(event,file){
        console.log(event, file)
        let loaded = event.loaded
        let total = event.total

        let porcent = parseInt((loaded/total) * 100)

        this.progressBarEl.style.width = porcent+'%'

    }
}