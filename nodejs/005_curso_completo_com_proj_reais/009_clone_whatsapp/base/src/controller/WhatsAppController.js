class WhatsAppController{
    constructor(){
        console.log('class WhatsAppController ok')

        elementsPrototype()
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
            this.el.panelEditProfile.addClass('open')
        })

        this.el.btnClosePanelEditProfile.on('click', e=>{
            this.el.panelEditProfile.removeClass('open')
        })


        this.el.btnNewContact.on('click', e=>{
            this.closeAllLeftPanel()

            this.el.panelAddContact.show()
            this.el.panelAddContact.addClass('open')
        })

        this.el.btnClosePanelAddContact.on('click', e=>{
            this.el.panelAddContact.removeClass('open')
        })

    }

    closeAllLeftPanel(){
        this.el.panelAddContact.hide()
        this.el.panelEditProfile.hide()

    }


}