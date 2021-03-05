class UserController {

    constructor (formId, tableId){
        this.formEl = document.getElementById(formId)
        this.tableEl = document.getElementById(tableId)

        this.onSubmit()
        this.onEditCancel()
    }

    onEditCancel(){
        document.querySelector("#box-user-update .btn-cancel").addEventListener("click", (event)=>{
            this.showPanelCreate()
        })
    }

    onSubmit(){


        this.formEl.addEventListener("submit",(event)=>{

            event.preventDefault()

            console.log('vou submeter')

            let btn = this.formEl.querySelector("[type=submit]")


            let user = this.getValues()

            console.log('user ',user)

            // this.getPhoto().then((content)=>{
            //     user.photo = content
            //     this.addLine(user)
            // }).catch((error)=>{
            //     console.log(error)
            // })

            if(user){
                btn.disabled = true
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
            }



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
        let isValid = true
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

            console.log('array ',field.name, (['name','email','password'].indexOf(field.name) > -1 && !field.value))

            if( ['name','email','password'].indexOf(field.name) > -1 && !field.value ){
                // console.dir(field)
                field.parentElement.classList.add('has-error')
                isValid =  false
            }

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

        if(!isValid){
            return false
        }

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

        //serializando um objeto
        tr.dataset.user = JSON.stringify(dataUser)

        tr.innerHTML = `
            <tr>
                <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
                <td>${dataUser.name}</td>
                <td>${dataUser.email}</td>
                <td>${(dataUser.admin) ? "Sim" : "Não"}</td>
                <td>${Utils.dateFormate(dataUser.register)}</td>
                <td>
                <button type="button" class="btn btn-primary btn-edit btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                </td>
            </tr>
    `

        tr.querySelector(".btn-edit").addEventListener("click", e=>{
            console.log(tr)

            let json = JSON.parse(tr.dataset.user)
            let form = document.querySelector("#form-user-update")

            for( let name in json){
                let field = form.querySelector("[name="+name.replace("_", "")+"]")

                if(field){

                    if(field.type == 'file') continue;

                    switch (field.type) {

                        case 'file':
                            continue;
                        break;

                        case 'radio':
                            field = form.querySelector("[name="+name.replace("_", "")+"][value="+json[name]+"]")
                            field.checked = true
                        break;

                        case 'checkbox':
                            field.checked = json[name]
                        break;

                        default:
                            field.value = json[name]
                        break;
                    }


                }

            }


            this.showPanelUpdate()
        })

        this.tableEl.appendChild(tr)

        this.updateCount()

    }

    showPanelCreate(){
        document.querySelector("#box-user-create").style.display= "block";
        document.querySelector("#box-user-update").style.display= "none";
    }

    showPanelUpdate(){
        document.querySelector("#box-user-create").style.display= "none";
        document.querySelector("#box-user-update").style.display= "block";
    }

    updateCount(){
        console.dir(this.tableEl)

        let numberUsers = 0
        let numberAdmin = 0

        Array.prototype.forEach.call(this.tableEl.children , (tr) => {
            console.log('tr=>', tr)
            numberUsers ++


            if(tr.dataset.user){
                //des-serializando um objeto
                let user = JSON.parse(tr.dataset.user)
                console.log(tr.dataset.user)
                if(user._admin){
                    numberAdmin++
                }
            }
        })

        document.querySelector("#number-users").innerHTML = numberUsers
        document.querySelector("#number-admin").innerHTML = numberAdmin
    }


}