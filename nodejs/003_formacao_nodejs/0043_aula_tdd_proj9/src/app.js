const express = require('express')
const app = express()
const mongoose = require('mongoose')

//bodyparser
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//ir no cmd -> "mongo" -> "use guiapics"
mongoose.connect('mongodb://localhost:27017/guiapics', {useNewUrlParser:true,useUnifiedTopology:true})

app.get('/',(req,res)=>{
    res.json({success:true,name:'william'})
})


module.exports = app