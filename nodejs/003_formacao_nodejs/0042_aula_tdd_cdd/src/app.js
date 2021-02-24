const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({success:true,name:'william'})
})

app.get('/cor/william',(req,res)=>{
    res.json({success:true,cor:'vermelho'})
})

module.exports = app
