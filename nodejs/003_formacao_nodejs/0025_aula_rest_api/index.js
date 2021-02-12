const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())

let DB={
    games:[
        {id:1, nome:'Mario', ano:2010, preco: 215.5},
        {id:2, nome:'Yoshi', ano:2011, preco: 214.5},
        {id:3, nome:'MK3', ano:2012, preco: 213.5},
        {id:4, nome:'Donkey', ano:2013, preco: 212.5},
        {id:5, nome:'Kong', ano:2014, preco: 211.5},
    ]
}

app.get('/games',(req,res)=>{
    res.statusCode=200
    res.json(DB.games)
})

app.listen(3000,()=>{
    console.log('API RODANDO http://localhost:3000/games')
})

