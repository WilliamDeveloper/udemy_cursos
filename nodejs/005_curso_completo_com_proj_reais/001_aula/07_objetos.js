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
console.log(objeto.ligar())



class celular2 {

    constructor(){
        //atributo da classe
        this.cor = "prata"
    }

    //metodo
    ligar(){

    }

}

objeto = new celular2()
console.log(objeto)
console.log(objeto.cor)
console.log(objeto.ligar())