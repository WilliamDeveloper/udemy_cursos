const calculadora = require("../calculadora")

test("deve retornar o valor 10 ao somar 5 + 5",()=>{
    let resultado = calculadora.soma(5,5)
    expect(resultado).toEqual(10)
})

test("deve retornar o valor 10 ao multiplicar 2 * 5",()=>{
    let resultado = calculadora.mult(2,5)
    expect(resultado).toEqual(10)
})