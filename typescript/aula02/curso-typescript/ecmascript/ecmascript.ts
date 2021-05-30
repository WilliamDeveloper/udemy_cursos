//let const
var seraqpode = 5
console.log(seraqpode)

//this
function normalComThis() {
    console.log(this)
}

normalComThis()

//mudando o contexto do this da funcao
const normalComThisEspecial = normalComThis.bind('abc')
normalComThisEspecial()

// o this definido em uma funcao arrow nunca muda
const arrowComThis = () => console.log(this)
arrowComThis()

// spread
const numbers =[2,55,6,8,9]
console.log(Math.max(...numbers))

//rest
function ff(...args: number[]) : number[] {
    return args
}

const numeros=ff(1,2,3,5,6,86,8,9)
console.log(numeros)

//tupla rest spread
const tupla: [number, string, boolean] = [1,'abc',true]
function ft(a:number,b:string,c:boolean) : void {

}