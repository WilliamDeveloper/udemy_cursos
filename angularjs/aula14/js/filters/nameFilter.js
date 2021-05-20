//recuperando um modulo
app = angular.module("listaTelefonica").filter("name", function () {

    return function(input){
        var listaDeNomes = input.split("L")

        if(/(da|de)/.test("de")) console.log("blau")

        input = listaDeNomes.join("-")
        return input
    }

})