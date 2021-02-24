const calculadora = require("../calculadora")

test("deve retornar o valor 10 ao somar 5 + 5",()=>{
    let resultado = calculadora.soma(5,5)
    expect(resultado).toEqual(10)
})