const express = require('express')
const app = express()

const indexRouter = require("./routes/index")
const usersRouter = require("./routes/users")

app.use(indexRouter)
app.use(usersRouter)









app.listen(3000,'127.0.0.1',()=>{
    console.log('servidor rodando')
})