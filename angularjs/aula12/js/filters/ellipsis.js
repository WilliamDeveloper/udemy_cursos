//recuperando um modulo
app = angular.module("listaTelefonica").filter("ellipsis", function () {

    return function(input,size){

        var output = input.substr(0,size)+"..."
        return output
    }

})