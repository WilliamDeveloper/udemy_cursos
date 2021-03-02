function calc(x1,operator, x2) {
    return eval(`${x1} ${operator} ${x2}`)
}

console.log('resultado ',calc(4,'+',2))
console.log('resultado ',calc(4,'-',2))
console.log('resultado ',calc(4,'*',2))
console.log('resultado ',calc(4,'/',2))


let result = calc(4,'+',2)
console.log(result)

//funcao anonima
(function () {
    console.log('sou uma funcao anonima')
})()