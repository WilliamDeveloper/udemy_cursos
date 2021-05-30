"use strict";
//string
var nome = 'joao';
console.log(nome);
//numbers
var idade = 27;
console.log(idade);
//boolean
var isOpen = true;
console.log(isOpen);
//tipos explicitos
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = '27';
console.log(typeof minhaIdade);
// array
var hobbies = ['asas', 12];
console.log(typeof hobbies);
// tuplas
var endereco = ['santa rosa', 555];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 55] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
})(Cor || (Cor = {}));
console.log(Cor);
console.log(Cor.Azul, Cor.Verde, Cor.Azul);
// any
var carro = 'blau';
console.log(carro);
carro = { nome: 'pímba' };
console.log(carro);
// funcoes
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function retornaNada() {
    console.log('oi');
}
retornaNada();
function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(3, 4));
// tipo funcao
var calculo;
calculo = multiplicar;
// tipos objeto
var usuario = {
    nome: 'will',
    idade: 18
};
console.log(usuario);
