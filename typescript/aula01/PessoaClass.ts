class Pessoa{
    nome:string;

    constructor(pessoa:string){
        this.nome = pessoa
    }

    exibirNome(){
        return `ola meu nome é ${this.nome}`;
    }
}

// let objPessoa = new Pessoa("William");
// console.log(objPessoa.exibirNome)