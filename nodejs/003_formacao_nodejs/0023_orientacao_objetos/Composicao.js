class A{
    constructor(){
        this.nome="william"
    }
}


class B{
    constructor(){
        this.idade=18
    }
}

class C{
    constructor(){
        this.a=new A()
        this.b=new B()
    }
}

let c = new C()
console.log(c.a.nome)
console.log(c.b.idade)


/// PREFERIR SEMPRE COMPOSICAO A HERANCA