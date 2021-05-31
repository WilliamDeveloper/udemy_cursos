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
    console.log(a,b,c)
}

ft(...tupla)

function ft2(...params: [number,string,boolean]) : void {
    console.log(params[0],params[1],params[2])
}
ft2(...tupla)

//destructuring
const item = {"ai":6}
const {ai: blauu} = item
const [r,t] =[7,9]

class Class {
    private a: number =0;

    constructor(){

    }

    public aa(){
        return a
    }
}