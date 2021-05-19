//recuperando um modulo
app = angular.module("listaTelefonica").config(function (serialGeneratorProvider) {
    serialGeneratorProvider.setLength(100)
});