// metodos de saber qual a quase tem determinado elemento do DOM
//dir(document.createElement('form'))
//console.dir(document.createElement('form'))
//console.dir(document.querySelector('form'))

HTMLFormElement.prototype.save = function(){

    let form = this

    return new Promise((resolve, reject)=>{
        form.addEventListener('submit', e=>{
            e.preventDefault()

            let formData = new FormData(form)
            fetch(form.action,{
                method: form.method,
                body: formData
            }).then( response => response.json()).then(json=>{
                resolve(json)
            }).catch((error)=>{
                reject(error)
            })

        })

    })


}
