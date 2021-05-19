//recuperando um modulo
app = angular.module("listaTelefonica").service("contatosAPI2", function ($http) {

    this.getCep = function () {
        var url = 'https://viacep.com.br/ws/01001000/json/'
        return $http.get(url)
    }


})