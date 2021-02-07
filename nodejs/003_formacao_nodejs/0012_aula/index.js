const express  = require("express")
const app = express()
const bodyParser = require('body-parser')
const perguntaModel = require('./database/Pergunta')

const connection =  require('./database/database')
connection
    .authenticate()
    .then(()=>{
        console.log('conexao feita com o banco de dados')
    })
    .catch((msgErro)=>{
        console.log(msgErro)
    })


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
app.get("/perguntar", (req, res)=>{
    res.render("perguntar.ejs")
})

app.post('/salvarPergunta',(req,res)=>{

    console.log(req.body);

    let titulo = req.body.titulo;
    let descricao = req.body.descricao;

    res.send(`formulario recebido ${titulo} ${descricao}`);
})


app.get("/:nome?/:lang?",(req,res)=>{
    let nome = req.params.nome || "William Pacheco"
    let lang = req.params.lang ||"javascript"
    let exibirMsg = true
    let produtos =[
        {nome:'doritos',preco:1.30},
        {nome:'fandangos',preco:1.80}
    ]
    let params = {
        nome:nome,
        lang:lang,
        empresa : "guia programador",
        inscritos : 1500,
        msg : exibirMsg,
        produtos:produtos,
    }
    res.render('index', params)// extensao nao obrigatoria
});

app.get("/home",(req,res)=>{
    // res.render('index.ejs')// extensao nao obrigatoria
    res.render('home')// extensao nao obrigatoria
});

app.get("/perfil",(req,res)=>{
    // res.render('index.ejs')// extensao nao obrigatoria
    res.render('principal/perfil')// extensao nao obrigatoria
});


app.listen(8181,()=>{
    console.log("servidor no ar")
})