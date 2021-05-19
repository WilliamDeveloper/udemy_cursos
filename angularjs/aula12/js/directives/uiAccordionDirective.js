//recuperando um modulo

app = angular.module("listaTelefonica").directive("uiAccordions", function () {
    return{
        controller: function ($scope, $element, $attrs) {
            this.helloWorld = function () {
                console.log("hello world")
            }
        },
    }
});

app = angular.module("listaTelefonica").directive("uiAccordion", function () {

    return {
        templateUrl: "view/accordion.html",
        transclude: true,
        scope:{
            title: "@"
        },
        require:"^uiAccordions",
        link: function (scope, element, attrs, ctrl) {
            ctrl.helloWorld()
            scope.open = function () {
                scope.isOpened = ! scope.isOpened
            }
        },


    }

})