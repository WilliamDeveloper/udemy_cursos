const calculadora = require("../calculadora")

describe("operacoes basicas",()=>{

    test("deve retornar o valor 10 ao somar 5 + 5",()=>{
        let resultado = calculadora.soma(5,5)
        expect(resultado).toEqual(10)
    })

    test("deve retornar o valor 10 ao multiplicar 2 * 5",()=>{
        let resultado = calculadora.mult(2,5)
        expect(resultado).toEqual(10)
    })

    test("deve retornar o valor 10 ao subtrair 20 - 10",()=>{
        let resultado = calculadora.sub(20,10)
        expect(resultado).toEqual(10)
    })

    test("deve retornar o valor 10 ao div 100 / 10",()=>{
        let resultado = calculadora.div(100,10)
        expect(resultado).toEqual(10)
    })

})

