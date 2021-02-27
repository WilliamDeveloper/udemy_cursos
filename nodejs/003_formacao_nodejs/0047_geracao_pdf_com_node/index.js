const pdf = require('html-pdf')

pdf
    .create("meu nome é william",{})
    .toFile("./meupdflindao.pdf",(error, res)=>{
        if(error){
            console.log('error: ', error)
        }else{
            console.log('res: ', res)
        }
    })