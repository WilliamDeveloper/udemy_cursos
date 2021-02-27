const pdf = require('html-pdf')
const ejs = require('ejs')

const nome= "william"
const imagem = 'https://lh3.googleusercontent.com/proxy/thw2h7yRvN-mcWrgdz-LzBIYPlMrRUffmdZnf4ojuM2cbzCLj3yH1FaW5tXbXFKstVIvZo_0EUGWXIqRAEn349VKBb5FqMo811wLHXFAXwZlTR7BOGn4s3ZZEk-M4Sikn6Vn01suLfH3rC0Se1t1zRJKRuMkSWU'

const htmlConteudo = `
    <h1 style="color:red"> Agora sim heim!</h1>
    <hr>  
    <p>Esse pdf tem muito conteudo heim!</p>
    <p>${nome}</p>
    <img src="${imagem}" alt="">
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



ejs.renderFile('./minhapagina.ejs',{nome, imagem},(error, html)=>{
    if(error){
        console.log(error)
    }else{
        console.log(html)

        pdf
            .create(html,{})
            .toFile("./meupdflindao2.pdf",(error, res)=>{
                if(error){
                    console.log('error: ', error)
                }else{
                    console.log('res: ', res)
                }
            })
    }
})

