import ExtendsHtmlFunctions from './../util/ExtendsHtmlFunctions'
import {Format} from './../util/Format'
import {CameraController} from './../controller/CameraController'
import {DocumentPreviewController} from './../controller/DocumentPreviewController'
import {MicrophoneController} from './../controller/MicrophoneController'

export default class WhatsAppController{
    constructor(){
        console.log('class WhatsAppController ok')

        // elementsPrototype()
        this.loadElements()
        this.initEvents()
    }



    loadElements(){
        this.el = {}

        let sizeFields = document.querySelectorAll('[id]').length
        console.log('quantidade de campos na tela: ', sizeFields)

        document.querySelectorAll('[id]').forEach(element=>{
            let name = Format.getCamelCase(element.id)
            console.log('linha-suprema: ', name, element.id)
            this.el[name]= element
        })
    }

    initEvents(){
        this.el.myPhoto.on('click', e=>{
            this.closeAllLeftPanel()

            this.el.panelEditProfile.show()

            setTimeout(()=>{ this.el.panelEditProfile.addClass('open') }, 300)

        })

        this.el.btnClosePanelEditProfile.on('click', e=>{
            this.el.panelEditProfile.removeClass('open')
        })


        this.el.btnNewContact.on('click', e=>{
            this.closeAllLeftPanel()

            this.el.panelAddContact.show()

            setTimeout(()=>{ this.el.panelAddContact.addClass('open') }, 300)

        })

        this.el.btnClosePanelAddContact.on('click', e=>{
            this.el.panelAddContact.removeClass('open')
        })

        this.el.photoContainerEditProfile.on('click', e=>{
            this.el.inputProfilePhoto.click()
        })

        this.el.inputNamePanelEditProfile.on('keypress', e=>{
            if(e.key === 'Enter'){
                e.preventDefault()
                this.el.btnSavePanelEditProfile.click()
            }
        })

        this.el.btnSavePanelEditProfile.on('click', e=>{
            console.log(this.el.inputNamePanelEditProfile.innerHTML)
        })

        this.el.formPanelAddContact.on('submit', e=>{
            e.preventDefault()

            let formData = new FormData(this.el.formPanelAddContact)

        })

        this.el.contactsMessagesList.querySelectorAll('.contact-item').forEach(item=>{

            item.on('click', e=>{
                this.el.home.hide()
                this.el.main.css({
                    display: 'flex'
                })
            })
        })

        this.el.btnAttach.on('click',e=>{
            e.stopPropagation()
            this.el.menuAttach.addClass('open')
            document.addEventListener('click',this.closeMenuAttach.bind(this))
        })


        this.el.btnAttachPhoto.on('click',e=>{
            console.log('photo')
            this.el.inputPhoto.click()
        })

        this.el.inputPhoto.on('change', e=>{
            console.log(this.el.inputPhoto.files)
            console.dir(this.el.inputPhoto.files)

            console.log(this.el.inputPhoto.files.toArray())

            this.el.inputPhoto.files.toArray().forEach( file=>{
                console.log('file ', file)
            })


        })

        this.el.btnAttachCamera.on('click',e=>{
            console.log('camera')
            this.closeAllMainPanel()
            this.el.panelCamera.addClass('open')
            this.el.panelCamera.css({
                "height":"calc(100% - 120px)",
            })

            this._camera = new CameraController(this.el.videoCamera)
        })

        this.el.btnClosePanelCamera.on('click', e=>{
            this.closeAllMainPanel()
            this.el.panelMessagesContainer.show()
            this._camera.stop()
        })

        this.el.btnTakePicture.on('click', e=>{
            console.log('btnTakePictore')
            let dataUrl = this._camera.takePicture()

            this.el.pictureCamera.src = dataUrl

            this.el.pictureCamera.show()
            this.el.videoCamera.hide()
            this.el.btnReshootPanelCamera.show()
            this.el.containerTakePicture.hide()
            this.el.containerSendPicture.show()
        })

        this.el.btnReshootPanelCamera.on('click', e=>{
            this.el.pictureCamera.hide()
            this.el.videoCamera.show()
            this.el.btnReshootPanelCamera.hide()
            this.el.containerTakePicture.show()
            this.el.containerSendPicture.hide()
        })

        this.el.btnSendPicture.on('click', e=>{
            console.log('btnSendPicture')
            console.log('this.el.pictureCamera ', this.el.pictureCamera.src)
        })




        this.el.btnAttachDocument.on('click',e=>{
            console.log('Document')
            this.closeAllMainPanel()
            this.el.panelDocumentPreview.addClass('open')
            this.el.panelDocumentPreview.css({
                "height":"calc(100% - 120px)",
            })

            this.el.inputDocument.click()
        })

        this.el.inputDocument.on('change',e=>{
            console.log('inputDocument-change->')
            if(this.el.inputDocument.files.length){

                this.el.panelDocumentPreview.css({
                    "height":"1%",
                })

                let file = this.el.inputDocument.files[0]
                console.log(file)

                this._documentPreviewController = new DocumentPreviewController(file)
                this._documentPreviewController.getPreviewData().then(data=>{
                    console.log('ok', data)
                    this.el.imgPanelDocumentPreview.src = data.src
                    this.el.infoPanelDocumentPreview.innerHTML = data.info

                    this.el.imagePanelDocumentPreview.show()
                    this.el.filePanelDocumentPreview.hide()

                    this.el.panelDocumentPreview.css({
                        "height":"calc(100% - 120px)",
                    })

                    this.el.imagePanelDocumentPreview.css({
                        "height":"80%",
                        "width":"75%"
                    })

                }).catch(error=>{

                    this.el.panelDocumentPreview.css({
                        "height":"calc(100% - 120px)",
                    })

                    console.log('nok', error)
                    switch (file.type) {
                        default:
                            console.log('default')
                            this.el.iconPanelDocumentPreview.className = 'jcxhw icon-doc-generic'
                    }
                    this.el.filenamePanelDocumentPreview.innerHTML = file.name
                    this.el.imagePanelDocumentPreview.hide()
                    this.el.filePanelDocumentPreview.show()
                })
            }
        })

        this.el.btnClosePanelDocumentPreview.on('click', e=>{
            this.closeAllMainPanel()
            this.el.panelMessagesContainer.show()

        })

        this.el.btnSendDocument.on('click', e=>{
            console.log('btnSendDocument')
        })

        this.el.btnAttachContact.on('click',e=>{
            console.log('Contact')
            this.el.modalContacts.show()
        })

        this.el.btnCloseModalContacts.on('click',e=>{
            console.log('btnCloseModalContacts')
            this.el.modalContacts.hide()
        })

        this.el.btnSendMicrophone.on('click', e=>{
            console.log('btnSendMicrophone')
            this.el.recordMicrophone.show()
            this.el.btnSendMicrophone.hide()


            this._microphoneController = new MicrophoneController()

            this._microphoneController.on('ready', (audio)=>{
                console.log('on-ready ', audio)
                this._microphoneController.startRecorder()
            })

            this._microphoneController.on('recordtimer', (duration)=>{
                this.el.recordMicrophoneTimer.innerHTML = Format.toTime(duration)
            })
        })

        this.el.btnCancelMicrophone.on('click', e=>{
            console.log('btnCanceldMicrophone')
            this._microphoneController.stoptRecorder()
            this.closeRecordMicrophone()
        })

        this.el.btnFinishMicrophone.on('click', e=>{
            console.log('btnFinishMicrophone')
            this._microphoneController.stoptRecorder()
            this.closeRecordMicrophone()
        })

        this.el.inputText.on('keypress', e=>{
            if(e.key === "Enter" && !e.ctrlKey){
                e.preventDefault()
                this.el.btnSend.click()

            }
        })

        this.el.inputText.on('keyup', e=>{
            if( this.el.inputText.innerHTML.length ){
                this.el.inputPlaceholder.hide()
                this.el.btnSendMicrophone.hide()
                this.el.btnSend.show()
            }else{
                this.el.inputPlaceholder.show()
                this.el.btnSendMicrophone.show()
                this.el.btnSend.hide()
            }
        })

        this.el.btnSend.on('click', e=>{
            console.log('btnSend')
        })

        this.el.btnEmojis.on('click', e=>{
            console.log('btnEmojis')
            this.el.panelEmojis.toggleClass('open')
        })

        this.el.panelEmojis.querySelectorAll('.emojik').forEach( emoji=>{
            emoji.on('click', e=>{
               console.log('e ', emoji.dataset.unicode)

               let img =  this.el.imgEmojiDefault.cloneNode()
                img.style.cssText = emoji.dataset.cssText
                img.style.unicode = emoji.dataset.unicode
                img.alt = emoji.dataset.unicode

                emoji.classList.forEach( name=>{
                    img.classList.add(name)
                })

                // this.el.inputText.append(img)
                let cursor = window.getSelection()

                if(!cursor.focusNode || !cursor.focusNode.id == 'input-text'){
                    this.el.inputText.focus()
                    cursor = window.getSelection()
                }

                let range = document.createRange()
                range = cursor.getRangeAt(0)
                range.deleteContents()

                let frag = document.createDocumentFragment()
                frag.appendChild(img)

                range.insertNode(frag)
                range.setStartAfter(img)

                // provocar um evento real
                this.el.inputText.dispatchEvent(new Event('keyup'))
            })
        })





    }

    closeRecordMicrophone(){
        this.el.recordMicrophone.hide()
        this.el.btnSendMicrophone.hide()
        this.el.btnSendMicrophone.show()
        console.log('this._recordMicrophoneInterval ', this._recordMicrophoneInterval)

    }

    closeAllMainPanel(){
        this.el.panelMessagesContainer.hide()
        this.el.panelDocumentPreview.removeClass('open')
        this.el.panelCamera.removeClass('open')
    }

    closeMenuAttach(event){
        document.removeEventListener('click',this.closeMenuAttach)
        this.el.menuAttach.removeClass('open')
        console.log('remove')
    }

    closeAllLeftPanel(){
        this.el.panelAddContact.hide()
        this.el.panelEditProfile.hide()

    }


}