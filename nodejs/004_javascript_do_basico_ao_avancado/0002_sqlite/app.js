const express = require('express')
const app = express()

const db = require('./db/connection')


//db connection
db.authenticate().then(()=>{
    console.log('conectou ao banco com sucesso')
})



//routes
app.get('/',(req,res)=>{
    res.send('OK')
})


const PORT = 3000
app.listen(PORT, ()=>{
    console.log('servidor rodando')
})

