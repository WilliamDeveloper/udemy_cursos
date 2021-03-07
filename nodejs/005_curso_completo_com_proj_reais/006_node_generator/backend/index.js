const express = require('express')
const app = express()

//bodyparser -> que agora ta dentro do express
//limite de dados de um requisicao post/json
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));

//versao 5.3.1
const  expressValidator  = require('express-validator');
app.use(expressValidator());

const consign = require('consign')

consign()
    .include('routes')
    .include('utils')
    .into(app)

/*
const indexRouter = require("./routes/index")
const usersRouter = require("./routes/users")

app.use('/',indexRouter)
app.use('/users',usersRouter)
*/




app.listen(4000,'127.0.0.1',()=>{
    console.log('servidor rodando')
})