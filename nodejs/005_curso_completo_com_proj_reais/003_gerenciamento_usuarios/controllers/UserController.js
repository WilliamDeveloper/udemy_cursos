class UserController {

    constructor (formId, tableId){
        this.formEl = document.getElementById(formId)
        this.tableEl = document.getElementById(tableId)

        this.onSubmit()
    }

    onSubmit(){


        this.formEl.addEventListener("submit",(event)=>{

            event.preventDefault()

            console.log('vou submeter')

            let btn = this.formEl.querySelector("[type=submit]")
            btn.disabled = true

            let user = this.getValues()

            console.log('user ',user)

            // this.getPhoto().then((content)=>{
            //     user.photo = content
            //     this.addLine(user)
            // }).catch((error)=>{
            //     console.log(error)
            // })

            // then com 2 parametros equivalente ao then-catch
            this.getPhoto().then(
            (content)=>{
                user.photo = content
                this.addLine(user)

                this.formEl.reset()
                btn.disabled = false
            },
            (error)=>{
                    console.log(error)
            })


        })
    }

    getPhoto(){

        return new Promise( (resolve,reject)=> {

            let fileReader = new FileReader()

            let elements = Array.prototype.filter.call(this.formEl.elements , (item) => {

                if(item.name === "photo"){
                    return item
                }

            })

            console.log('elements ',elements)
            console.log('elements ',elements[0])
            console.log('elements.files ',elements[0].files[0])

            let file = elements[0].files[0]

            fileReader.onload = () =>{
                resolve(fileReader.result)
            }

            fileReader.onerror =(e)=>{
                reject(e)
            }

            if(file){
                fileReader.readAsDataURL(file)
            }else{
                resolve('dist/img/boxed-bg.jpg')
            }

        })

    }

    getValues(){
        let user = {}
        //descobrir no console os atributos do objeto
        // dir(document.getElementsByTagName('div')[0])
        console.log(this.formEl)
        console.log(this.formEl.elements)
        console.log(this.formEl.elements.forEach)

        //para tranformar o objeto html em array com spread operator
        // [...this.formEl.elements].forEach( function (field, index) {
        //
        //     if(field.name == "gender"){
        //         if(field.checked){
        //             user[field.name] = field.value
        //         }
        //     }else{
        //         user[field.name] = field.value
        //     }
        //
        // })


        Array.prototype.forEach.call(this.formEl.elements , (field) => {

            if(field.name == "gender"){
                if(field.checked){
                    user[field.name] = field.value
                }
            }else if(field.name =='admin') {
                user[field.name] = field.checked
            }else{
                user[field.name] = field.value
            }

        })


        // deu erro no foreach usar a sintaxe acima
        // this.formEl.elements.forEach( function (field, index) {
        //
        //     if(field.name == "gender"){
        //         if(field.checked){
        //             user[field.name] = field.value
        //         }
        //     }else{
        //         user[field.name] = field.value
        //     }
        //
        // })

        return new User(
            user.name,
            user.gender,
            user.birth,
            user.country,
            user.email,
            user.password,
            user.photo,
            user.admin
        )
    }

    addLine(dataUser){

        let tr = document.createElement('tr')

        tr.innerHTML = `
            <tr>
                <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
                <td>${dataUser.name}</td>
                <td>${dataUser.email}</td>
                <td>${(dataUser.admin) ? "Sim" : "Não"}</td>
                <td>${dataUser.register}</td>
                <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                </td>
            </tr>
    `
        this.tableEl.appendChild(tr)

    }


}