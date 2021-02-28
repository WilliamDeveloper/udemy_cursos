//es6 - versao 2015

class Animal {
    constructor(){
        this.patas =4
    }
}

class Cachorro extends Animal{

    constructor(raca, patas, cor){
        super()
        this.raca = raca
        super.patas = patas
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


console.log(dog instanceof Animal)
console.log(dog instanceof Cachorro)
