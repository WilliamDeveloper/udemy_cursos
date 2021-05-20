//recuperando um modulo
app = angular.module("listaTelefonica").config(function ($routeProvider) {
    $routeProvider.when("/contatos",{
        templateUrl : "view/contatos.html"
    })
});