console.log('excecutando modulo01.js')

const oculta = () =>{
    console.log('excecutando funcao oculta')
}

// faz a funcao poder ser publica para outros arquivos q importar o modulo
module.exports.executa = ()=>{
    console.log('excecutando a executa')
}