const fs  = require('fs')

let nomeArquivo ="./usuario.json"
let readFileOptions = {
    encoding:'utf-8'
}

//----------------------------------------------------------------------------------
// LENDO
//----------------------------------------------------------------------------------
let objJson = {}
fs.readFile(nomeArquivo,readFileOptions, (erro, dados)=>{
    if(erro){
        console.log('falha ao ler no arquivo')
    }else{
        objJson = JSON.parse(dados)
        console.log(objJson)
    }
})


//----------------------------------------------------------------------------------
// ESCREVENDO
//----------------------------------------------------------------------------------
// let novoConteudoArquivo = `
//     dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
//     dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
//     dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
//     dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
//     dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
//     dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
//     dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
//     dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
//     dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
//     dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
//     dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
//     dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
//     dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
//     dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
//     dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
//     dsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsaddsadsadsadsadasdasdasdasdsadsad
// `
// fs.writeFile(nomeArquivo,novoConteudoArquivo, (erro, dados)=>{
//     if(erro){
//         console.log('falha ao escrever no arquivo')
//     }else{
//         console.log(dados)
//     }
// })