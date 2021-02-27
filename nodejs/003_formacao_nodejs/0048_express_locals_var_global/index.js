const express = require('express')
const app = express()

//bodyparser -> que agora ta dentro do express
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.locals={
    nome: 'William',
    idade:18
}

app.get('/',(req,res)=>{
    res.render('')
})

app.listen(3000,(req,res)=>{
    console.log('servidor rodando')
})