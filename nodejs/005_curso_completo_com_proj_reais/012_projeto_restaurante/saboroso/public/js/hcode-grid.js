class HCodeGrid{

    constructor(configs){
        console.log('hcode-grid')

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
            window.location.reload()
        }).catch( error =>{
            console.log('error ', error)
        })

        this.formUpdate = document.querySelector(this.options.formUpdate)

        this.formUpdate.save().then(json=>{
            console.log('json ', json)
            window.location.reload()
        }).catch( error =>{
            console.log('error ', error)
        })
    }

    fireEvent(name, args){
        console.log('fireEvent ', name, args)
        if(typeof this.options.listeners[name] === 'function'){
            this.options.listeners[name].apply(this,args)
        }
    }

    initButtons(){


        Array.prototype.forEach.call( document.querySelectorAll(this.options.btnUpdate), (btn) => {
            console.log('btn')



            btn.addEventListener('click', e=>{

                this.fireEvent('beforeUpdateClick', [e])

                let tr = e.path.find( el => {
                    return (el.tagName.toUpperCase() === 'TR')
                })

                console.log('tr ',tr)

                let data = JSON.parse(tr.dataset.row)
                console.log('data', data)

                for (let name in data){
                    console.log('name ', name)
                    let input = this.formUpdate.querySelector(`[name=${name}]`)
                    switch (name) {
                        // case 'register':
                        //
                        //   break
                        case 'photo':
                            this.formUpdate.querySelector('img').src= '/'+data[name]
                            break
                        default:
                            if(input){
                                input.value = data[name]
                            }

                    }

                }

                $('#modal-update').modal('show')
                this.fireEvent('afterUpdateClick', [e])

            })


        })
        ///---------------
        Array.prototype.forEach.call( document.querySelectorAll(this.options.btnDelete), (btn) => {
            console.log('btn')

            btn.addEventListener('click', e=>{



                let tr = e.path.find( el => {
                    return (el.tagName.toUpperCase() === 'TR')
                })

                console.log('tr ',tr)

                let data = JSON.parse(tr.dataset.row)
                console.log('data', data)

                if(!confirm(eval('`'+this.options.deleteMsg+'`'))) return false

                fetch(eval('`'+this.options.deleteUrl+'`'),{ method:'DELETE'} )
                    .then(response => response.json())
                    .then(json=>{
                    console.log('json ', json)
                    window.location.reload()
                }).catch(error =>{
                    console.log('error ', error)
                })

            })


        })
    }


}