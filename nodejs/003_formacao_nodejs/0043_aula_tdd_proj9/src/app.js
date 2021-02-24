const express = require('express')
const app = express()

//bodyparser
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({success:true,name:'william'})
})


module.exports = app