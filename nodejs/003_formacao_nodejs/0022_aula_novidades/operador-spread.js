var nome ='william'
var idade = 18
var empresa = {
    nome: 'guia programador',
    cidade:'sao paulo',
    site: 'guiadoprogramador.com',
    email:"guia@doprogramador.com"
}

var user = {
    nome:nome,
    idade: idade,
    empresa: empresa
}

console.log(user)

// vai copiar os atributos do obj empresa e fazer parecer q pertencam ao user2
var user2 = {
    nome,
    idade,
    ...empresa
}

console.log(user2)