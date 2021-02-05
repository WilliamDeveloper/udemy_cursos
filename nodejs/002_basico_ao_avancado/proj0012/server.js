const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({extended:true}))


// configuracao de upload
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'uploads/')
    },
    filename: (req, file, cb)=>{
        let nomeArquivo = file.fieldname+'-'+Date.now()+path.extname(file.originalname)
        cb(null, nomeArquivo)
    }
})

const upload = multer({storage: storage})


// rotas
app.get('/',(req, res)=>{
    // res.json({message:'bem vindo'})
    res.sendFile(__dirname+'/index.html')
})


app.post("/upload", upload.single('arquivo'), (req, res, next)=>{
    const file = req.file

    if(!file){
        const err = new Error('Por Favor selecione um arquivo')
        err.httpRequestStatusCode = 400
        return next(err)
    }
    res.send(file)

})


// sempre a ultima coisa
app.listen(3000,'127.0.0.1',()=>{
    console.log('server rodando em http://localhost:3000')
})