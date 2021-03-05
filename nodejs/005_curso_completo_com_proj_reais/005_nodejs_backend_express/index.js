const express = require('express')
const app = express()



app.get("/",(req,res)=>{
    res.statusCode = 200
    res.setHeader("Content-Type", 'text/html')
    res.end('<h1> ola</h1>')
})


app.get("/user/json",(req,res)=>{
    res.statusCode = 200
    res.setHeader("Content-Type", 'application/json')
    let user = {
        nome:'william',
        idade:18,
        admin:true
    }
    res.end(JSON.stringify(user))
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('servidor rodando')
})