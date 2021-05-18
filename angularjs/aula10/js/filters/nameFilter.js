//recuperando um modulo
app = angular.module("listaTelefonica").filter("name", function () {

    return function(input){
        var listaDeNomes = input.split("L")
        input = listaDeNomes.join("-")
        return input
    }

})