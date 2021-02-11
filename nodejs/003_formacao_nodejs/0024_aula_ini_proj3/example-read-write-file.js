const fs  = require('fs')

let nomeArquivo ="./arquivo.txt"
let readFileOptions = {
    encoding:'utf-8'
}

//----------------------------------------------------------------------------------
// LENDO
//----------------------------------------------------------------------------------
fs.readFile(nomeArquivo,readFileOptions, (erro, dados)=>{
    if(erro){
        console.log('falha ao ler no arquivo')
    }else{
        console.log(dados)
    }
})


//----------------------------------------------------------------------------------
// ESCREVENDO
//----------------------------------------------------------------------------------
let novoConteudoArquivo = `
    dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
    dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
    dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
    dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
    dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
    dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
    dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
    dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
    dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
    dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
    dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
    dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
    dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
    dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
    dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
    dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
`
fs.writeFile(nomeArquivo,novoConteudoArquivo, (erro, dados)=>{
    if(erro){
        console.log('falha ao escrever no arquivo')
    }else{
        console.log(dados)
    }
})