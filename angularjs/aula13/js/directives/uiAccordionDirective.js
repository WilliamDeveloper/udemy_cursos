//recuperando um modulo

angular.module("listaTelefonica").run(function ($templateCache) {
    console.log('run---')
    var template = `
        <div class="ui-accordion-title" ng-click="open()">{{title}}</div>
        <div class="ui-accordion-content" ng-transclude></div>
    `
    $templateCache.put("view/accordion.html", template)
})

app = angular.module("listaTelefonica").directive("uiAccordions", function () {
    return{
        controller: function ($scope, $element, $attrs) {
            // this.helloWorld = function () {
            //     console.log("hello world")
            // }
            var accordions = []
            this.registerAccordion = function (accordion) {
                console.log(accordion.$id)
                accordions.push(accordion)
            }
            this.closeAll = function () {
                accordions.forEach(function (accordion) {
                    accordion.isOpened = false
                })
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
            // ctrl.helloWorld()
            ctrl.registerAccordion(scope)
            scope.open = function () {
                ctrl.closeAll()
                scope.isOpened = ! scope.isOpened
            }
        },


    }

})