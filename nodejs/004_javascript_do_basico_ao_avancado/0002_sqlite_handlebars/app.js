const express = require('express')
const app = express()
const jobRoute = require('./routes/jobRoutes')
const path = require('path')

const expressHandleBars = require('express-handlebars')

//bodyparser -> que agora ta dentro do express
app.use(express.urlencoded({extended:false}))
app.use(express.json());

const db = require('./db/connection')
const Job = require('./models/Job')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// handlebars - configurarando pasta views
app.set('views', path.join(__dirname, 'views'))
app.engine("handlebars",expressHandleBars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')




// configuracao de reconhecimento de conteudo de arquivos estaticos
app.use(express.static('node_modules'))
app.use(express.static('public'))

//db connection
db.authenticate().then(()=>{
    console.log('conectou ao banco com sucesso')
})





//routes
app.get('/',(req,res)=>{

    let search = req.query.job
    let query = '%'+search+'%'

    console.log(search, query)

    if(!search){
        Job.findAll({
            order:[
                ['createdAt','DESC']
            ]
        }).then(jobs =>{
            res.render('index',{jobs})
        }).catch(error=>{
            res.json({error})
        })
    }else{
        Job.findAll({
            where: {
                title: {[Sequelize.Op.like] : query}
            },
            order:[
                ['createdAt','DESC']
            ]
        }).then(jobs =>{
            res.render('index',{jobs,search})
        }).catch(error=>{
            res.json({error})
        })
    }



})

app.use('/job', jobRoute)


const PORT = 3000
app.listen(PORT, ()=>{
    console.log('servidor rodando')
})

