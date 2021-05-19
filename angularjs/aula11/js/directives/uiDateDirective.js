//recuperando um modulo
app = angular.module("listaTelefonica").directive("uiDate", function ($filter) {

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
            
            ctrl.$parsers.push(function (value) {
                console.log(value)
                if(value.length === 10){
                    var dateArray = value.split("/")
                    var dia = dateArray[0]
                    var mes = dateArray[1]-1
                    var ano = dateArray[2]
                    var data = new Date(ano,mes,dia)
                    console.log(data,data.getTime())
                    return data.getTime()
                }
            })

            ctrl.$formatters.push(function (value) {
                console.log("scope.$id")
                return $filter("date")(value,"dd/MM/yyyy")
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
        // restrict:"AE",
        // scope:{
        //     // topic: "@title"
        //     title: "@",
        //     message:"@"
        //     // message:"=" // cria vinculo two way databinding se usar variavel
        // },
        // transclude:true// sobrescrever o conteudo da tag

    }

})