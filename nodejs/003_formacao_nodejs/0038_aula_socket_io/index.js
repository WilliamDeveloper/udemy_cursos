const express = require("express")
const app = express()
const http = require("http").createServer(app)
const io = require("socket.io")(http)


io.on("connection",(socket)=>{
    console.log("socket ",socket)
    console.log("socket ",socket.id)

    socket.on('disconnect', ()=>{
        console.log('X desconectou '+socket.id)
    })

    socket.on('boasvindas',(data)=>{
        console.log('excecutando evento de boasvindas')
        console.log(data)
    })

    socket.on('palavra',(data)=>{
        console.log(data)
        socket.emit("resultado", data + " Guia do william")
    })
})

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index")
})




//usando o http nativo do  node com o express imbutido
http.listen(3000,()=>{
    console.log("rodando servidor")
})