//recuperando um modulo
app = angular.module("listaTelefonica").directive("uiAlert", function () {

    return {
        // template: "<div>uiAlert</div>"
        templateUrl: "view/alert.html",
        replace:true, //sobrescrever o html externo,

        // tipos de restricao
        // a-diretiva restrita ao atributo do elemento
        // e-diretiva restrita ao elemento
        // c-diretiva restrita a classe do elemento
        // m-diretiva restrita ao comentario do elemento
        // restrict:"A"
        // restrict:"E"
        restrict:"AE",
        scope:{
            // topic: "@title"
            title: "@",
            message:"@"
            // message:"=" // cria vinculo two way databinding se usar variavel
        },
        transclude:true// sobrescrever o conteudo da tag

    }

})