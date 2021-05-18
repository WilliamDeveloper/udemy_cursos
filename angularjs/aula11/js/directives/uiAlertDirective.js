//recuperando um modulo
app = angular.module("listaTelefonica").directive("uiAlert", function () {

    return {
        // template: "<div>uiAlert</div>"
        templateUrl: "view/alert.html",
        replace:true,
    }

})