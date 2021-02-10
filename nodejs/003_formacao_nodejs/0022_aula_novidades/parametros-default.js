/*
quando eu tenho parametros com valor default eles se tornam opcionais
eles devem ser vir por ultimo
* */
function soma(a,b=50) {
    return a + b
}

function sub(a,b) {
    return a-b
}

console.log('soma ', soma(10,20))
console.log('soma ', soma(10))