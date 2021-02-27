const express = require('express')
const app = express()

// dizer para o express usar o EJS como view engine
app.set('view engine','ejs')

//bodyparser -> que agora ta dentro do express
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.locals={
    NOME: 'William',
    IDADE:18
}

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(3000,(req,res)=>{
    console.log('servidor rodando')
})