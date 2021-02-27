const express = require('express')
const app = express()
const multer = require('multer')

app.set("view engine","ejs")

//configuracao do middleware - multer
const upload = multer({ dest: "uploads/"})


app.get("/",(req,res)=>{
    res.render('index')
})

app.post("/upload",upload.single("file"),(req,res)=>{
    console.log('arquivo recebido')
    res.send('ok')
})

app.listen(3000,()=>{
    console.log('rodando o servidor')
})