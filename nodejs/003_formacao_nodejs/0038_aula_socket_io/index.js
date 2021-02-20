const express = require("express")
const app = express()
const http = require("http").createServer(app)
const io = require("socket.io")(http)

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index")
})

//usando o http nativo do  node com o express imbutido
http.listen(3000,()=>{
    console.log("rodando servidor")
})