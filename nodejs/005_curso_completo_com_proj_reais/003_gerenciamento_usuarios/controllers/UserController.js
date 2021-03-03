class UserController {

    constructor (formId){
        this.formEl = document.getElementById(formId)
    }

    getValues(){
        let user = {}
        //descobrir no console os atributos do objeto
        // dir(document.getElementsByTagName('div')[0])
        this.formEl.elements.forEach( element =>{

            if(field.name == "gender"){
                if(field.checked){
                    user[field.name] = field.value
                }
            }else{
                user[field.name] = field.value
            }

        })

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


}