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
    res.send('rodando')
})

app.listen(3000,(req,res)=>{
    console.log(`rodando no link http://localhost:3000/`)
})