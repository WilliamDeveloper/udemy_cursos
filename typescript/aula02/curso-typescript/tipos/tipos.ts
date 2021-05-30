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

let funcionario:{
    supervisores: string[],
    baterponto:(horas:number) => string
}= {
    supervisores : ['william', 'luciane'],
    baterponto(horario:number): string {
        if(horario <= 8){
            return 'Ponto normal'
        }else{
            return 'fora do horario'
        }

    }
}

console.log(funcionario.baterponto(7))
console.log(funcionario.baterponto(9))

// type alias
type Funcionario={
    supervisores: string[],
    baterponto:(horas:number) => string
}

let funcionario2: Funcionario= {
    supervisores : ['william', 'luciane'],
    baterponto(horario:number): string {
        if(horario <= 8){
            return 'Ponto normal'
        }else{
            return 'fora do horario'
        }

    }
}


console.log(funcionario2.baterponto(7))
console.log(funcionario2.baterponto(9))

//union types
let nota : number | string = 10
console.log(`minha nota eh ${nota}`)


//checando tipos
let valor =30
if(typeof valor === 'number'){
    console.log('eh um numbnner')
}else{
    console.log(typeof valor)
}
let valor2 ='30'
if(typeof valor2 === 'number'){
    console.log('eh um numbnner')
}else{
    console.log(typeof valor2)
}

//never
function falha(msg: string) : never {
    throw new Error(msg)
}
function f11(msg: string) : never {
    while(true){}
}

const produto ={
    nome: 'sabao',
    preco: -1,
    validarProduto(){
        if(!this.nome || this.nome.trim().length == 0){
            falha('nome invalido')
        }
        if(this.preco <= 0){
            falha('preco invalido')
        }
    }
}