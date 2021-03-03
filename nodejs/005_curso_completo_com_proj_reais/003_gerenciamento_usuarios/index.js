let name = document.querySelector('#exampleInputName')
let gender = document.querySelectorAll('#form-user-create [name=gender]:checked')
let birth = document.querySelector('#exampleInputBirth')
let country = document.querySelector('#exampleInputCountry')
let email = document.querySelector('#exampleInputEmail1')
let password = document.querySelector('#exampleInputPassword1')
let photo = document.querySelector('#exampleInputFile')
let admin = document.querySelector('#exampleInputAdmin')

exampleInputName.value = 'William'

let user = {}


let fields = document.querySelectorAll("#form-user-create [name]")



// document.querySelectorAll("button").forEach((button)=>{
//     button.addEventListener("click",()=>{
//         console.log('clicou em mim')
//     })
// })

document.getElementById("form-user-create").addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log('vou submeter')

    fields.forEach(field=>{

        if(field.name == "gender"){
            if(field.checked){
                user[field.name] = field.value
            }
        }else{
            user[field.name] = field.value
        }


    })

    console.log(user)
})