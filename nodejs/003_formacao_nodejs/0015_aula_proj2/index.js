const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database")

const categoriesController = require('categories/CategoriesController')


// dizer para o express usar o EJS como view engine
app.set('view engine','ejs')


// configuracao de reconhecimento de conteudo de arquivos estaticos
app.use(express.static('node_modules'))
app.use(express.static('public'))


// configuracao do body parser
app.use(bodyParser.urlencoded({extended:false}))

//permitir receber dados via json
app.use(express.json())


//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })



//rotas
app.use('/', categoriesController)


app.get("/",(req,res)=>{
    res.render("index.ejs")
});



app.listen(8181,()=>{
    console.log("servidor no ar")
})