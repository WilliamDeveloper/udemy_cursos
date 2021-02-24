const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json(200)

})

app.listen(3131,()=>{
    console.log('rodando app na porta 3131')
})