//recuperando um modulo
app = angular.module("listaTelefonica").factory("timestampInterceptor", function () {

   return{
        request:  function (config) {
            console.log(config)
            return config
        }

   }


})