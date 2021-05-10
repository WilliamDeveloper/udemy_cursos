//recuperando um modulo
app = angular.module("listaTelefonica").factory("contatosAPI", function ($http) {

    var _getCep = function () {
        var url = 'https://viacep.com.br/ws/01001000/json/'
        return $http.get(url)
    }

    return {
        getCep : _getCep
    }

})