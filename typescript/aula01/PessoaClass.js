var Pessoa = /** @class */ (function () {
    function Pessoa(pessoa) {
        this.nome = pessoa;
    }
    Pessoa.prototype.exibirNome = function () {
        return "ola meu nome eh " + this.nome;
    };
    return Pessoa;
}());
// let objPessoa = new Pessoa("William");
// console.log(objPessoa.exibirNome)
