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

console.log(pessoa)