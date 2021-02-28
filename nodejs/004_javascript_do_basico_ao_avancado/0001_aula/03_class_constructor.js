function criaCachorro(raca, patas, cor) {
    const cachorro = Object.create({})
    cachorro.raca = raca
    cachorro.patas = patas
    cachorro.cor = cor
    return cachorro
}

const dog = criaCachorro("pitbul",4, "verde")

console.log(dog)