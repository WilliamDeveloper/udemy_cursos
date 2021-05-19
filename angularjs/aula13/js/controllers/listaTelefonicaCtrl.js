// var app = angular.module("listaTelefonica",["ngMessages"])
//recuperando um modulo
app = angular.module("listaTelefonica")

//definindo um controller
// app.controller("listaTelefonicaCtrl", function ($scope, $filter) {
app.controller("listaTelefonicaCtrl", function ($scope, uppercaseFilter, $http, contatosAPI, serialGenerator) {
    $scope.message = "Arranhando o ANGULARJS";
    $scope.app = "Lista Telefonica";
    $scope.contatos =[
        // {nome: $filter('uppercase')('William2'), data: new Date(), telefone:'999999999', cor: 'yellow'},
        {nome: uppercaseFilter('William2'), data: new Date(), telefone:'999999999', cor: 'yellow'},
        {nome: 'William1', data: new Date(), telefone:'999999999', cor: 'blue'},
        {nome: 'William3', data: new Date(), telefone:'999999999', cor: 'pink'},
    ];
    $scope.operadoras = [
        {nome:"Oi", codigo:14, categoria:"Celular", preco: 2},
        {nome:"Vivo", codigo:15, categoria:"Celular", preco: 1},
        {nome:"Tim", codigo:41, categoria:"Celular", preco: 3},
        {nome:"GVT", codigo:25, categoria:"Fixo", preco: 1},
        {nome:"Embratel", codigo:21, categoria:"Fixo", preco: 2},
    ]
    $scope.contato ={
        data: 1034218800000
    }

    $scope.adicionarContato = function (contato) {
        // para nao ficar vinculado com databinding no array
        var copy_contato = angular.copy(contato)
        $scope.contatos.push(copy_contato)
        delete $scope.contato;
        $scope.contatoForm.$setPristine()
    }

    $scope.classe1 = "selecionado"
    $scope.classe2 = "negrito"

    $scope.apagarContatos = function (contatos) {
        console.log(contatos)
        $scope.contatos = contatos.filter(function (contato) {
            if(!contato.selecionado) return contato;
        });


    };

    $scope.isContatoSelecionado = function (contatos) {
        console.log(contatos)

        //se algum for true o resultado sera true
        return contatos.some(function (contato) {
            return contato.selecionado
        })

    };

    $scope.ordenarPor=function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao =!$scope.direcaoDaOrdenacao
    }

    var carregarCep = function () {
        console.log('serialGenerator ', serialGenerator.generate())
        var url = 'https://viacep.com.br/ws/01001000/json/'
        console.log('url ',url)
        // $http.get(url)
        contatosAPI.getCep()
        // .success(function (data, status) {
            .then(function (response) {
                console.log('status ', response.status)
                console.log('data ', response.data)

            })
    }

    carregarCep();
})