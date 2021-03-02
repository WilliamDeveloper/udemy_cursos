//arrow function
let calculadora = (x1,operator, x2)=> {
    return eval(`${x1} ${operator} ${x2}`)
}

//function normal
function calc(x1,operator, x2) {
    return eval(`${x1} ${operator} ${x2}`)
}

console.log('resultado ',calc(4,'+',2))
console.log('resultado ',calc(4,'-',2))
console.log('resultado ',calc(4,'*',2))
console.log('resultado ',calc(4,'/',2))


let result = calc(4,'+',2)
console.log(result)

let valor;
//funcao anonima
(function () {
    valor = 'sou uma funcao anonima'
})()

console.log(valor)