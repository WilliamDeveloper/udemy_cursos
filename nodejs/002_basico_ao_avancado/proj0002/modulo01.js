console.log('excecutando modulo01.js')

// funcao privada usavel somente ao arquivo atual
// pois nao foi dado "module.exports"
const oculta2 = () =>{
    console.log('excecutando funcao oculta')
}

const oculta = () =>{
    console.log('excecutando funcao oculta')
}


const executa = ()=>{
    console.log('excecutando a executa')
}

// faz a funcao poder ser publica para outros arquivos q importar o modulo
module.exports = { oculta, executa}