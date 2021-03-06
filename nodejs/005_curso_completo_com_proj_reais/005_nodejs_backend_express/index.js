const express = require('express')
const app = express()

const consign = require('consign')
consign().include('routes').into(app)

/*
const indexRouter = require("./routes/index")
const usersRouter = require("./routes/users")

app.use('/',indexRouter)
app.use('/users',usersRouter)
*/

//bodyparser -> que agora ta dentro do express
app.use(express.urlencoded({extended:false}))
app.use(express.json());


app.listen(3000,'127.0.0.1',()=>{
    console.log('servidor rodando')
})