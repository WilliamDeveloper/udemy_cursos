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


        objJson.nome = "WILLIAM PACHECO"
        objJson.idade = 19



        //----------------------------------------------------------------------------------
        // ESCREVENDO
        //----------------------------------------------------------------------------------
        let novoConteudoArquivo = JSON.stringify(objJson)
        fs.writeFile(nomeArquivo,novoConteudoArquivo, (erro, dados)=>{
            if(erro){
                console.log('falha ao escrever no arquivo')
            }else{
                console.log(dados)
            }
        })

    }
})

