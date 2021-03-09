class WhatsAppController{
    constructor(){
        console.log('class WhatsAppController ok')

        this.elementsPrototype()
        this.loadElements()
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

    elementsPrototype(){
        
        Element.prototype.hide = function () {
            this.style.display = 'none'
        }

        Element.prototype.show = function () {
            this.style.display = 'block'
        }

        Element.prototype.toggle = function () {
            this.style.display = (this.style.display === 'none') ? 'block' :'none'
        }

        Element.prototype.on = function (events, fn) {
            events.split(' ').forEach(event =>{
                this.addEventListener(event, fn)
            })
        }

        Element.prototype.css = function (styles) {
            for(let name in styles){
                this.style[name] = styles[name]
            }
        }


    }
}