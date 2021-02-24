const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.statusCode(200)
    res.send('oi')
})

app.listen(3131,()=>{
    console.log('rodando app na porta 3131')
})