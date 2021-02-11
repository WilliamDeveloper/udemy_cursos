class Animal {
    constructor(){
        this.nome='animal'
    }
}

class Cachorro extends Animal{
    constructor(){
        super()
        this.idade = 19
    }
}

let cao = new Cachorro()
console.log(cao.nome)
console.log(cao.idade)