console.log('excecutando modulo01.js')

// funcao privada usavel somente ao arquivo atual
// pois nao foi dado "module.exports"
const oculta = () =>{
    console.log('excecutando funcao oculta')
}

// faz a funcao poder ser publica para outros arquivos q importar o modulo
module.exports.executa = ()=>{
    console.log('excecutando a executa')
}