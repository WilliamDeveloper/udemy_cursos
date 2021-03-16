class HCodeGrid{

    constructor(configs){
        console.log('hcode-grid')

        let listenerDefault = {
            beforeUpdateClick : function(e){
                console.log('beforeUpdateClick')
            },
            afterUpdateClick : function(e){
                console.log('afterUpdateClick-default')
                $('#modal-update').modal('show')
            },

            beforeDeleteClick : function(e){
                console.log('beforeDeleteClick')
            },
            afterDeleteClick : function(e){
                console.log('afterDeleteClick')
                window.location.reload()

            },

            beforeFormCreate : function(e){
                console.log('beforeFormCreate')
            },
            afterFormCreate : function(e){
                console.log('afterFormCreate')
                window.location.reload()

            },
            afterFormCreateError : function(e){
                console.log('afterFormCreateError')

            },


            beforeFormUpdate : function(e){
                console.log('beforeFormUpdate')
            },
            afterFormUpdate : function(e){
                console.log('afterFormUpdate')
                window.location.reload()
            },
            afterFormUpdateError : function(e){
                console.log('afterFormUpdateError')
            },

        }

        configs.listeners = Object.assign({}, [listenerDefault, configs.listeners])


        console.log('blua--> ', configs, configs.listeners.afterUpdateClick)

        let objectDefault = {
            formCreate : '#modal-create form',
            formUpdate : '#modal-update form',
            btnUpdate : '.btn-update',
            btnDelete : '.btn-delete',
        }
        // vai mergiar os dois objetos e manter as propriedades passadas por ultimo
        this.options = Object.assign({}, objectDefault, configs)

        this.initForms()
        this.initButtons()
    }

    initForms(){
        this.formCreate = document.querySelector(this.options.formCreate)

        this.formCreate.save().then(json=>{
            console.log('json ', json)
            this.fireEvent('afterFormCreate')
        }).catch( error =>{
            console.log('error ', error)
            this.fireEvent('afterFormCreateError')
        })

        this.formUpdate = document.querySelector(this.options.formUpdate)

        this.formUpdate.save().then(json=>{
            console.log('json ', json)
            this.fireEvent('afterFormUpdate')
        }).catch( error =>{
            console.log('error ', error)
            this.fireEvent('afterFormUpdateError')
        })
    }

    fireEvent(name, args){
        console.log('fireEvent ', name, args)
        if(typeof this.options.listeners[name] === 'function'){
            this.options.listeners[name].apply(this,args)
        }
    }

    getTrData(e){
        let tr = e.path.find( el => {
            return (el.tagName.toUpperCase() === 'TR')
        })

        console.log('tr ',tr)

        let data = JSON.parse(tr.dataset.row)
        console.log('data', data)
        return data
    }

    initButtons(){


        Array.prototype.forEach.call( document.querySelectorAll(this.options.btnUpdate), (btn) => {
            console.log('btn')



            btn.addEventListener('click', e=>{

                this.fireEvent('beforeUpdateClick', [e])

               let data = this.getTrData(e)

                for (let name in data){
                    console.log('name ', name)
                    this.options.onUpdateLoad(this.formUpdate, name, data)

                }


                this.fireEvent('afterUpdateClick', [e])

            })


        })
        ///---------------
        Array.prototype.forEach.call( document.querySelectorAll(this.options.btnDelete), (btn) => {
            console.log('btn')

            btn.addEventListener('click', e=>{

                this.fireEvent('beforeDeleteClick', [e])

                let data = this.getTrData(e)

                if(!confirm(eval('`'+this.options.deleteMsg+'`'))) return false

                fetch(eval('`'+this.options.deleteUrl+'`'),{ method:'DELETE'} )
                    .then(response => response.json())
                    .then(json=>{
                    console.log('json ', json)

                    this.fireEvent('afterDeleteClick', [e])

                }).catch(error =>{
                    console.log('error ', error)
                })

            })


        })
    }


}