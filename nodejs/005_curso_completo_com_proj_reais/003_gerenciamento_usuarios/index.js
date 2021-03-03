let name = document.querySelector('#exampleInputName')
let gender = document.querySelectorAll('#form-user-create [name=gender]:checked')
let birth = document.querySelector('#exampleInputBirth')
let country = document.querySelector('#exampleInputCountry')
let email = document.querySelector('#exampleInputEmail1')
let password = document.querySelector('#exampleInputPassword1')
let photo = document.querySelector('#exampleInputFile')
let admin = document.querySelector('#exampleInputAdmin')

exampleInputName.value = 'William'


let fields = document.querySelectorAll("#form-user-create [name]")

fields.forEach(field=>{

    if(field == "gender" && field.checked){
        console.log('gender ',field)
    }

    console.log(field)
})
