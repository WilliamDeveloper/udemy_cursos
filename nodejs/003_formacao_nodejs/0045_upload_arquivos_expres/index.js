const express = require('express')
const app = express()
const multer = require('multer')

app.set("view engine","ejs")


const storage = multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null,"uploads/")
    },
    filename:function (req,file,cb) {
        cb(null,file.originalname)
    }
})


//configuracao do middleware - multer
//const upload = multer({ dest: "uploads/"})
const upload = multer({storage})


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