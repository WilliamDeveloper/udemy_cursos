console.log('carregado2')

let email = ''
email = document.querySelector('[name=email]').value

console.log('email: ', email)

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