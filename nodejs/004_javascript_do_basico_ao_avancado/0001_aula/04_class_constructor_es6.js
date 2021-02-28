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



const dog = new Cachorro("pitbul",4, "verde")

console.log(dog)
dog.uivar()
dog.latir()