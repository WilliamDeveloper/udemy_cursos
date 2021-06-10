"use strict";
var _this = this;
//let const
var seraqpode = 5;
console.log(seraqpode);
//this
function normalComThis() {
    console.log(this);
}
normalComThis();
//mudando o contexto do this da funcao
var normalComThisEspecial = normalComThis.bind('abc');
normalComThisEspecial();
// o this definido em uma funcao arrow nunca muda
var arrowComThis = function () { return console.log(_this); };
arrowComThis();
// spread
var numbers = [2, 55, 6, 8, 9];
console.log(Math.max.apply(Math, numbers));
//rest
function ff() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
var numeros = ff(1, 2, 3, 5, 6, 86, 8, 9);
console.log(numeros);
//tupla rest spread
var tupla = [1, 'abc', true];
function ft(a, b, c) {
}
