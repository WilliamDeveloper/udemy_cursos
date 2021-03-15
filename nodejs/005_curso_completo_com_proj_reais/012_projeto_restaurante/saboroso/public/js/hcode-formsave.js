class HcodeFileReader {

    constructor(inputEl, imgEl){

        console.log('HcodeFileReader')
        this.inputEl = inputEl
        this.imgEl = imgEl

        this.initInputEvent()

    }

    initInputEvent(){
        console.log('initInputEvent')
        document.querySelector(this.inputEl).addEventListener('change', e=>{
            console.log('files ',e.target.files)
            this.reader(e.target.files[0]).then(result=>{
                console.log('initInputEvent-result ', result)
                document.querySelector(this.imgEl).src = result
            })
        })
    }

    reader(file){


        return new Promise((resolve, reject)=>{

            let reader = new FileReader()
            reader.onload = ()=>{
                console.log('onload')
                resolve(reader.result)
            }

            reader.onerror = ()=>{
                reject('nao foi possivel ler a imagem')
            }

            reader.readAsDataURL(file)
        })
    }
}