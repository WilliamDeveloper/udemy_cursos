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

console.log(Cachorro.prototype.raca)
console.log(Cachorro.prototype.patas)
console.log(Cachorro.prototype.cor)
Cachorro.prototype.cor2=44

const dog = new Cachorro("pitbul",4, "verde")

console.log(Cachorro.prototype.raca)
console.log(Cachorro.prototype.patas)
console.log(Cachorro.prototype.cor)
console.log(Cachorro.prototype.cor2)


console.log(dog)
dog.uivar()
dog.latir()