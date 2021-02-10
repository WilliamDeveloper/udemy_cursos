const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database")
const session = require('express-session')


const categoriesController = require('./categories/CategoriesController')
const articlesController = require('./articles/ArticlesController')
const usersController = require('./users/UsersController')

const Article = require('./articles/Article')
const Category = require('./categories/Category')


// dizer para o express usar o EJS como view engine
app.set('view engine','ejs')

// configurando session
app.use(session({
    secret:"qualquer-texto-para-aumentar-seguranca",
    cookie:{maxAge:30*1000}
}))


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
app.use('/', articlesController)
app.use('/', usersController)


app.get("/",(req,res)=>{
    let limiteElementoPorPagina = 2
    Article.findAll({
        order:[
            ['id','Desc']
        ],
        limit: limiteElementoPorPagina
    }).then((articles)=>{
        Category.findAll().then( categories =>{
            res.render("index.ejs",{articles:articles, categories:categories})
        })
    })
});

app.get("/:slug",(req,res)=>{
    let slug = req.params.slug;
    Article.findOne({
        where:{
            slug:slug
        }
    }).then((article)=>{
        if(article!= undefined){

            Category.findAll().then( categories =>{
                res.render("article",{article:article, categories:categories})
            })
        }else{
            res.redirect("/")
        }
    }).catch(error =>{
        res.redirect("/")
    })
});



app.get('/category/:slug',(req,res)=>{
    let slug  = req.params.slug;
    Category.findOne({
        where:{
            slug:slug
        },
        include:[{model: Article}]
    }).then( (category)=>{
        if(category!=undefined){

            Category.findAll().then(categories =>{
                res.render('index',{
                    articles: category.articles,
                    categories:categories
                })
            })

        }else{
            res.redirect('/')
        }
    }).catch( err =>{
        res.redirect('/')
    })
})



app.listen(8181,()=>{
    console.log("servidor no ar on port 8181")
})