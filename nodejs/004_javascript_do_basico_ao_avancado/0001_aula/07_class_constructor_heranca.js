//e3s6 - versao 2015
class Cachorro {

    constructor(raca, patas, cor){
        this.raca = raca
        this.patas = patas
        this.cor = cor

    }

    get getRaca(){
        return this.raca
    }

    set setRaca(value){
        this.raca = value
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

dog.setRaca = "viralata"
console.log(dog)
console.log(dog.raca)
console.log(dog)