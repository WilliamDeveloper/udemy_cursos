//recuperando um modulo
app = angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {

    var _getCep = function () {
        var url = config.baseUrlCep + ''
        return $http.get(url)
    }

    return {
        getCep : _getCep
    }

})