const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const ejs = require('ejs')
const mongoose = require('mongoose')

const appointmentService = require('./services/AppointmentService')

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
mongoose.set('useFindAndModify', false);



app.get('/', (req, res)=>{
    res.render('index')
})


app.get('/cadastro', (req, res)=>{
    res.render('create')
})


app.post('/cadastro/create', async (req, res)=>{

    let result = await appointmentService.Create(req.body)
    console.log(result)

    if(result.success){
        res.redirect('/')
    }else{
        res.send('ocorreu uma falha')
    }

})

app.get('/getcalendar', async (req, res)=>{

    let consultas = await  appointmentService.GetAll({showFinished: false})

    res.json(consultas)
})

app.get('/event/:id', async (req, res)=>{
    let {id}  = req.params
    let consulta = await appointmentService.GetById({id:id})

    let response = {
        id,
        consulta,
    }
    // res.json(response)
    res.render('event',response)

})

app.post('/cadastro/finish', async (req, res)=>{

    let {id} = req.body

    console.log('id: ', id)

    let result = await appointmentService.Finish({id})

    res.redirect('/')

})



app.listen(3000,()=>{
    console.log('servidor rodando')
})