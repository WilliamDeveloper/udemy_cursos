const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('express-flash')
const cookieParser = require('cookie-parser')

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())

app.use(cookieParser('senhaParaGerarCookie'))

app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true,
    // cookie:{secure:true}
    cookie:{maxAge:60*1000}//60minutos
}))

app.use(flash())

app.get('/',(req,res)=>{
    console.log('rodando')

    let messsages = req.flash('messages')

    console.log(messsages)

    res.render('index')
})

app.post('/form',(req,res)=>{
    console.log('rodando',req.body)
    const {email, nome, pontos} = req.body

    let msgErrors =[]
    if(email == undefined || email==""){
        msgErrors.push({email:"nao pode ser vazio"})
    }
    if(nome == undefined || nome==""){
        msgErrors.push({nome:"nao pode ser vazio"})
    }
    if(pontos == undefined || pontos==""){
        msgErrors.push({pontos:"nao pode ser vazio e deve ser menor q 20"})
    }
    if(msgErrors.length>0){
        req.flash('messages', msgErrors)
    }


    // res.json({formMsgError:msgErrors})
    res.redirect("/")
})

app.listen(3000,(req,res)=>{
    console.log(`rodando no link http://localhost:3000/`)
})