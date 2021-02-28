// "use strict"


// "use strict" previne q façamos erros bobos no codigo javascript

let opa = "teste"

// com use strict essa linha daria erro evitando erro bobo
delete Object.prototype

console.log(opa)


function funcao() {
    "use strict"

    blau = "festa"

    console.log(blau)
}


funcao()