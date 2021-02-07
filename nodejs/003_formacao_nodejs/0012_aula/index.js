const express  = require("express")
const app = express()
const bodyParser = require('body-parser')
const Pergunta = require('./database/Pergunta')

// dizer para o express usar o EJS como view engine
app.set('view engine','ejs')

// configuracao de reconhecimento de conteudo de arquivos estaticos
app.use(express.static('node_modules'))
app.use(express.static('public'))


// configuracao do body parser
app.use(bodyParser.urlencoded({extended:false}))

//permitir receber dados via json
app.use(express.json())

//rotas
app.get("/", (req, res)=>{
    console.log('rota raiz')
    Pergunta.findAll({raw:true}).then( perguntas =>{
        console.log(perguntas)
    });
    res.render("index.ejs")
})

app.get("/perguntar", (req, res)=>{
    res.render("perguntar.ejs")
})

app.post('/salvarPergunta',(req,res)=>{

    console.log(req.body);

    let titulo = req.body.titulo;
    let description = req.body.descricao;

    Pergunta.create({
        titulo:titulo,
        description: description
    }).then(()=>{
        res.redirect("/")
    })

    res.send(`formulario recebido ${titulo} ${description}`);
})



app.listen(8181,()=>{
    console.log("servidor no ar")
})