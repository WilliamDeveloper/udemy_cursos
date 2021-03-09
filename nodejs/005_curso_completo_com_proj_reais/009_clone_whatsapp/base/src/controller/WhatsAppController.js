class WhatsAppController{
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
        })

        this.el.btnClosePanelCamera.on('click', e=>{
            this.closeAllMainPanel()
            this.el.panelMessagesContainer.show()
        })

        this.el.btnTakePicture.on('click', e=>{
            console.log('btnTakePictore')
        })

        this.el.btnAttachDocument.on('click',e=>{
            console.log('Document')
            this.closeAllMainPanel()
            this.el.panelDocumentPreview.addClass('open')
            this.el.panelDocumentPreview.css({
                "height":"calc(100% - 120px)",
            })
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
        })


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