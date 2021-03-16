// metodos de saber qual a quase tem determinado elemento do DOM
//dir(document.createElement('form'))
//console.dir(document.createElement('form'))
//console.dir(document.querySelector('form'))

HTMLFormElement.prototype.save = function(config){

    let form = this

    form.addEventListener('submit', e=>{
        e.preventDefault()

        let formData = new FormData(form)
        console.log(form, formData)
        fetch(form.action,{
            method: form.method,
            body: formData
        }).then( response => response.json()).then(json=>{
            console.log('then- ', json)
            if(json.error){
                if(typeof config.failure === 'function') config.failure(json.error)
            }else{
                if(typeof config.success === 'function') config.success(json)
            }
        }).catch((error)=>{
            console.log('catch- ', error)
            if(typeof config.failure === 'function') config.failure(error)
        })

    })




}
