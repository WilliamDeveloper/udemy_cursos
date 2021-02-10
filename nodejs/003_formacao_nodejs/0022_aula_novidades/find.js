var users = [
    {
        nome:'william',
        idade:18
    },
    {
        nome:'william',
        idade:12
    },
    {
        nome:'luciane',
        idade:15
    }
]

var primeiroUsuario = users.find(user => user.nome == 'william')
console.log(primeiroUsuario)