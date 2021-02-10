
var user = {
    nome: 'guia programador',
    idade: 18,
    cidade: 'sao paulo',
    site: 'guiadoprogramador.com',
    email: 'guia@doprogramador.com'
}

var nome = user.nome;
var idade = user.idade
console.log(nome, idade)

var {cidade,site,email} = user
console.log(cidade,site,email)