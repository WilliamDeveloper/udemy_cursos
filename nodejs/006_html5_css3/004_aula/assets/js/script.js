console.log('carregado2')


let emailEl = document.querySelector('[name=email]')
let passwordEl = document.querySelector('#password')

let email = emailEl.value
let password = passwordEl.value

console.log('email: ', email)
console.log('password: ', password)

let btnSubmit = document.querySelector("#btn-submit")
btnSubmit.addEventListener('click', e=>{
    console.log('clicaram no btnSubmit')
})

let formLogin = document.querySelector("#form-login")
formLogin.addEventListener('mouseenter', e=>{
    console.log('mouse esta sobre o formLogin')
})
formLogin.addEventListener('mouseleave', e=>{
    console.log('mouse esta fora do formLogin')
})
formLogin.addEventListener('submit', e=>{
    e.preventDefault()
    console.log('submetendo formLogin')
})

let json ={
    email : email
}
console.log('json ' ,json)

let json2 ={
    email,
    password
}
console.log('json2 ' ,json2)

let stringJSON = JSON.stringify(json2)
console.log(stringJSON)

let jsonFromString = JSON.parse(stringJSON)
console.log(jsonFromString)

if(!json.email){
    console.log('o campo deve ser preenchido')
}else{
    console.log('o campo foi preenchido')
    console.error('o campo foi preenchido')
}
