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
var funcionario = {
    supervisores: ['william', 'luciane'],
    baterponto: function (horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'fora do horario';
        }
    }
};
console.log(funcionario.baterponto(7));
console.log(funcionario.baterponto(9));
var funcionario2 = {
    supervisores: ['william', 'luciane'],
    baterponto: function (horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'fora do horario';
        }
    }
};
console.log(funcionario2.baterponto(7));
console.log(funcionario2.baterponto(9));
//union types
var nota = 10;
console.log("minha nota eh " + nota);
var nota2 = 10;
nota2 = null;
console.log("minha nota eh " + nota2);
//checando tipos
var valor = 30;
if (typeof valor === 'number') {
    console.log('eh um numbnner');
}
else {
    console.log(typeof valor);
}
var valor2 = '30';
if (typeof valor2 === 'number') {
    console.log('eh um numbnner');
}
else {
    console.log(typeof valor2);
}
//never
function falha(msg) {
    throw new Error(msg);
}
function f11(msg) {
    while (true) { }
}
var produto = {
    nome: 'sabao',
    preco: -1,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('nome invalido');
        }
        if (this.preco <= 0) {
            falha('preco invalido');
        }
    }
};
