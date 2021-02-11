class Calculadora {
    constructor(){

    }

    static soma(a,b){
        return a+b
    }

    static sub(a,b){
        return a-b
    }

    static mult(a,b){
        return a*b
    }

    static div(a,b){
        return a/b
    }
}

console.log(Calculadora.soma(4,5))
console.log(Calculadora.sub(4,5))
console.log(Calculadora.mult(4,5))
console.log(Calculadora.div(4,5))