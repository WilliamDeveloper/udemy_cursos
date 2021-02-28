const pessoa ={
    nome: '',
    setNome: function (nome) {
        this.nome = nome
    },
    getNome : function () {
        return this.nome
    }
}

pessoa.setNome("william")

console.log(Object.getPrototypeOf(pessoa))
console.log(Object.getPrototypeOf(pessoa) === Object.prototype)
console.log(pessoa.hasOwnProperty('nome'))
console.log(pessoa)


// herda atributos e metodos mas nao eh considerado o dono
const newPessoa = Object.create(pessoa)
console.log(Object.getPrototypeOf(newPessoa))
console.log(Object.getPrototypeOf(newPessoa) === Object.prototype)
console.log(newPessoa.hasOwnProperty('nome'))

console.log(newPessoa.nome)


