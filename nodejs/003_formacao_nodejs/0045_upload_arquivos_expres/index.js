const express = require('express')
const app = express()
const multer = require('multer')

app.set("view engine","ejs")

//configuracao do multer
const upload = multer({ dest: "uploads/"})


app.get("/",(req,res)=>{
    res.render('index')
})

app.post("/upload",(req,res)=>{
    console.log('arquivo recebido')
})

app.listen(3000,()=>{
    console.log('rodando o servidor')
})