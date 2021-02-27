const express = require('express')
const app = express()

//configurar icone da aplicacao (senao aparecer de primeira, aperte CONTROL + F5 para forcar limpar cache)
app.use('/favicon.ico', express.static('images/favicon.ico'))

// dizer para o express usar o EJS como view engine
app.set('view engine','ejs')

//bodyparser -> que agora ta dentro do express
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.locals={
    NOME: 'William',
    IDADE:18,
    MENU: ["Home", "Planos", "Loja", "Perfil", "Sair"]
}

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/nome/:nome',(req,res)=>{
    let nome = req.params.nome
    app.locals.NOME = nome
    res.render('index')
})

app.listen(3000,(req,res)=>{
    console.log('servidor rodando')
})