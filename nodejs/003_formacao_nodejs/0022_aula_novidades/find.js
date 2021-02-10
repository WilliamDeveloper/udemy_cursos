var users = [
    {
        nome:'william',
        idade:18
    },
    {
        nome:'renato',
        idade:12
    },
    {
        nome:'luciane',
        idade:15
    }
]

var lista = users.find(user => user.nome == 'william')
console.log(lista)