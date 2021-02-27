const pdf = require('html-pdf')

const nome= "william"

const htmlConteudo = `
    <h1 style="color:red"> Agora sim heim!</h1>
    <hr>  
    <p>Esse pdf tem muito conteudo heim!</p>
    <p>${nome}</p>
`

pdf
    .create(htmlConteudo,{})
    .toFile("./meupdflindao.pdf",(error, res)=>{
        if(error){
            console.log('error: ', error)
        }else{
            console.log('res: ', res)
        }
    })