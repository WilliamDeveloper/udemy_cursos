const calculadora = require('./calculadora');
const {soma} = require('./calculadora');

let resultado = calculadora.soma(5,4)
console.log(resultado)

let resultado2 = soma(5,7)
console.log(resultado2)


let resultado3 = calculadora.subtracao(5,4)
console.log(resultado3)