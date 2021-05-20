//recuperando um modulo
app = angular.module("listaTelefonica").config(function ($httpProvider) {
    console.log($httpProvider)
    $httpProvider.interceptors.push("timestampInterceptor")
});