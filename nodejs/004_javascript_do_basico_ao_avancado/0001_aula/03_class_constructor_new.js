function Cachorro(raca, patas, cor) {
   this.raca = raca
    this.patas = patas
    this.cor = cor
    this.uivar = function () {
        console.log('uivar')
    }
}

Cachorro.prototype.latir = function () {
    console.log('outra forma de declarar funcao em uma classe')
}

const dog = new Cachorro("pitbul",4, "verde")

console.log(dog)
dog.uivar()
dog.latir()