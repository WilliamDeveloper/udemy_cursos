var nome= 'william'
var idade = 18

var frase = "ola meu nome é "+nome+" e tenho "+idade
console.log(frase)

//utilizando do recurso da interpolacao
var frase2 = `ola meu nome é ${nome} e tenho ${idade}`
console.log(frase2)


//utilizando do recurso da interpolacao - aceita quebra de linha
var frase3 = `
    ola meu nome é ${nome} 
    e tenho ${idade}
`
console.log(frase3)