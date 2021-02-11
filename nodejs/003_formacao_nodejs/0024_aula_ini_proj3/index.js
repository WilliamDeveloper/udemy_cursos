const fs  = require('fs')

let nomeArquivo ="./arquivo.txt"
let readFileOptions = {
    encoding:'utf-8'
}
fs.readFile(nomeArquivo,readFileOptions, (erro, dados)=>{
    if(erro){
        console.log('falha ao ler o arquivo')
    }else{
        console.log(dados)
    }
})