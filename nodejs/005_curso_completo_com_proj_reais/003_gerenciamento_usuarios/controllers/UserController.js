class UserController {

    constructor (formId, tableId){
        this.formEl = document.getElementById(formId)
        this.tableEl = document.getElementById(tableId)
    }

    onSubmit(){


        this.formEl.addEventListener("submit",(event)=>{

            event.preventDefault()

            console.log('vou submeter')

            let user = this.getValues()
            console.log('user ',user)
            this.addLine(user)

        })
    }

    getValues(){
        let user = {}
        //descobrir no console os atributos do objeto
        // dir(document.getElementsByTagName('div')[0])
        console.log(this.formEl)
        console.log(this.formEl.elements)
        console.log(this.formEl.elements.forEach)


        Array.prototype.forEach.call(this.formEl.elements , (field) => {

            if(field.name == "gender"){
                if(field.checked){
                    user[field.name] = field.value
                }
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

        this.tableEl.innerHTML = `
            <tr>
                <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
                <td>${dataUser.name}</td>
                <td>${dataUser.email}</td>
                <td>${dataUser.admin}</td>
                <td>${dataUser.birth}</td>
                <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                </td>
            </tr>
    `

    }


}