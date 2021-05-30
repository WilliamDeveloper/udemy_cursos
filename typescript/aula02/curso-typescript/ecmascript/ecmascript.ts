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

//rest spread