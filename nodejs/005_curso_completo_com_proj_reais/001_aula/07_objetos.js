//funcoes -> metodos
// variaveis sao propriedades
// objeto = instancia de uma classe

let celular = function () {
    //atributo da classe
    this.cor = "prata"

    //metodo
    this.ligar = function() {

    }

}

let objeto = new celular()
console.log(objeto)
console.log(objeto.cor)
