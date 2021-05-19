//recuperando um modulo
app = angular.module("listaTelefonica").directive("uiDate", function () {

    return {
        require:"ngModel",
        link: function(scope, element, attrs, ctrl){

            var _formatDate = function(date){
                date = date.replace(/[^0-9]+/g,"")
                if(date.length > 2){
                    date = date.substring(0,2) + '/' + date.substring(2)
                }
                if(date.length > 5){
                    date = date.substring(0,5) + '/' + date.substring(5,9)
                }
                return date
            }

            element.bind("keyup",function () {
                var valor = _formatDate(ctrl.$viewValue )
                ctrl.$setViewValue(valor)
                ctrl.$render()
                console.log(ctrl.$viewValue)
            })

            console.log(scope.$id)

        },
        // template: "<div>uiAlert</div>"
        // templateUrl: "view/alert.html",
        // replace:true, //sobrescrever o html externo,

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