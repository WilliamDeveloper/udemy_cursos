const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const ejs = require('ejs')
const mongoose = require('mongoose')

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({extended:false}));

// create application/json parser
app.use(bodyParser.json());

// configuracao de reconhecimento de conteudo de arquivos estaticos
app.use(express.static('node_modules'))
app.use(express.static('public'))

// dizer para o express usar o EJS como view engine
app.set('view engine','ejs')

// conectando na colecao do banco
let configMongose = {useNewUrlParser:true, useUnifiedTopology:true}
mongoose.connect('mongodb://localhost:27017/agendamento', configMongose)



app.get('/', (req, res)=>{
    res.send('oi')
})


app.get('/cadastro', (req, res)=>{
    res.send('create')
})

app.listen(3000,()=>{
    console.log('servidor rodando')
})