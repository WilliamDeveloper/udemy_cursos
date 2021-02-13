const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('express-flash')

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())

app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:true}
}))

app.use(flash())

app.get('/',(req,res)=>{
    console.log('rodando')
    res.render('index')
})

app.post('/form',(req,res)=>{
    console.log('rodando',req.body)
    const {email, nome, pontos} = req.body

    let msgErrors =[]
    if(email == undefined || email==""){
        msgErrors.push({email:"email nao pode ser vazio"})
    }
    if(nome == undefined || nome==""){
        msgErrors.push({nome:"nome nao pode ser vazio"})
    }
    if(pontos == undefined || pontos==""){
        msgErrors.push({pontos:"pontos nao pode ser vazio e deve ser menor q 20"})
    }

    res.json({formMsgError:msgErrors})
})

app.listen(3000,(req,res)=>{
    console.log(`rodando no link http://localhost:3000/`)
})