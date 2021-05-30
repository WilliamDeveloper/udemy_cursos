//string
let nome : string ='joao'
console.log(nome)

//numbers
let idade : number =27
console.log(idade)

//boolean
let isOpen = true
console.log(isOpen)

//tipos explicitos
let minhaIdade: any
minhaIdade = 27
console.log(typeof minhaIdade)

minhaIdade = '27'
console.log(typeof minhaIdade)


// array
let hobbies: any[] = ['asas', 12]
console.log(typeof hobbies)


// tuplas
let endereco : [string, number] = ['santa rosa',555]
console.log(endereco)

//enums
enum Cor{
    Cinza = 55, //0
    Verde = 100, //1
    Azul , //2
}

console.log(Cor)
console.log(Cor.Azul, Cor.Verde, Cor.Azul)

// any
let carro: any = 'blau'
console.log(carro)
carro = {nome: 'pímba'}
console.log(carro)

// funcoes
function retornaMeuNome(): string {
    return nome
}

console.log(retornaMeuNome())

function retornaNada() : void {
    console.log('oi')
}

retornaNada()

function multiplicar(a:number, b:number) : number {
    return a * b
}

console.log(multiplicar(3,4))

// tipo funcao
let calculo : (a: number, b: number) => number
calculo= multiplicar


// tipos objeto
let usuario : {nome:string, idade:number} ={
    nome:'will',
    idade: 18
}
console.log(usuario)