//e3s6 - versao 2015
class Cachorro {

    constructor(raca, patas, cor){
        this.raca = raca
        this.patas = patas
        this.cor = cor
    }

    uivar() {
        console.log('uivar')
    }

    latir () {
        console.log('outra forma de declarar funcao em uma classe')
    }
}

let patas = Symbol()

//criando symbol
Cachorro.prototype[patas] = 4

const dog = new Cachorro("pitbul",4, "verde")

// acessando symbol
console.log(Cachorro.prototype[patas])
console.log(dog[patas])