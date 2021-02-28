const pessoa ={
    nome: '',
    setNome: function (nome) {
        this.nome = nome
    },
    getNome : function () {
        return this.nome
    }
}

console.log(Object.getPrototypeOf(pessoa))
console.log(Object.getPrototypeOf(pessoa) === Object.prototype)
console.log(pessoa.hasOwnProperty('nome'))

console.log(pessoa)