class HCodeGrid{

    constructor(configs){
        console.log('hcode-grid', configs)

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
                alert('nao foi possivel criar')

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
                alert('nao foi possivel atualizar')
            },

        }

        configs.listeners = Object.assign({}, listenerDefault, configs.listeners)


        console.log('blua--> ', configs, configs.listeners.afterUpdateClick)

        let objectDefault = {
            formCreate : '#modal-create form',
            formUpdate : '#modal-update form',
            btnUpdate : 'btn-update',
            btnDelete : 'btn-delete',
            onUpdateLoad : (form, name, data)=> {
                console.log('name ', form, name, data)
                let input = form.querySelector(`[name=${name}]`)
                if(input){
                    input.value = data[name]
                }

            },
        }
        // vai mergiar os dois objetos e manter as propriedades passadas por ultimo
        this.options = Object.assign({}, objectDefault, configs)

        this.rows = []
        Array.prototype.forEach.call( document.querySelectorAll('table tbody tr'), (row) => {
            console.log('row ', row)
            Array.prototype.forEach.call( row.querySelectorAll('.btn'), (btn) => {
                console.log('btn ', btn)
                this.rows.push(btn)
            })
        })

        this.initForms()
        this.initButtons()
    }

    initForms(){
        this.formCreate = document.querySelector(this.options.formCreate)

        this.formCreate.save({
            success: (json) =>{
                console.log('json ', json)
                this.fireEvent('afterFormCreate')
            },
            failure:  (error) =>{
                console.log('error ', error)
                this.fireEvent('afterFormCreateError')
            }
        })

        this.formUpdate = document.querySelector(this.options.formUpdate)

        this.formUpdate.save({
            success:function (json) {
                console.log('json ', json)
                this.fireEvent('afterFormUpdate')
            },
            failure: function (error) {
                console.log('error ', error)
                this.fireEvent('afterFormUpdateError')
            }
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

    btnUpdateClick(e){
        this.fireEvent('beforeUpdateClick', [e])

        let data = this.getTrData(e)

        for (let name in data){
            console.log('name ', name)
            this.options.onUpdateLoad(this.formUpdate, name, data)

        }


        this.fireEvent('afterUpdateClick', [e])
    }

    btnDeleteClick(e){
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
    }

    initButtons(){

        this.rows.forEach(btn=>{

            btn.addEventListener('click', e=>{
                console.log('btn ', btn, e)
                if(e.target.classList.contains(this.options.btnUpdate)){
                    this.btnUpdateClick(e)
                }else if(e.target.classList.contains(this.options.btnDelete)){
                    this.btnDeleteClick(e)
                }else{
                    this.fireEvent('buttonClick', [e.target, this.getTrData(e), e])
                }
            })
        })

    }


}