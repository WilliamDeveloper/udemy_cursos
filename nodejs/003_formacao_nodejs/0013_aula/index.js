const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");
//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
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

// Rotas
app.get("/",(req, res) => {
    Pergunta.findAll({ raw: true, order:[
            ['id','DESC'] // ASC = Crescente || DESC = Decrescente
        ]}).then(perguntas => {
        res.render("index",{
            perguntas: perguntas
        });
    });
});

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



app.get("/pergunta/:id",(req ,res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined){ // Pergunta encontrada

            Resposta.findAll({
                where: {perguntaId: pergunta.id},
                order:[
                    ['id','DESC']
                ]
            }).then(respostas => {
                res.render("pergunta",{
                    pergunta: pergunta,
                    respostas: respostas
                });
            });

        }else{ // Não encontrada
            res.redirect("/");
        }
    });
})

app.post("/responder",(req, res) => {
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta;
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect("/pergunta/"+perguntaId);
    });
});


app.listen(8181,()=>{
    console.log("servidor no ar")
})