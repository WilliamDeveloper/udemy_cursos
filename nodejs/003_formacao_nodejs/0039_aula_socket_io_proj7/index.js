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

    socket.on('msg',(data)=>{
        console.log(data)

        //emitir para o cliente que mando a msg
        // socket.emit('showmsg',data)

        // emitir globalmente para todos conectados no servidor
        io.emit('showmsg',data)

        // emitir para todos conectados menos para quem mandou
        // socket.broadcast.emit('showmsg',data)

    })

})

// configuracao de reconhecimento de conteudo de arquivos estaticos
app.use(express.static('node_modules'))
app.use(express.static('public'))

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index")
})




//usando o http nativo do  node com o express imbutido
http.listen(3000,()=>{
    console.log("rodando servidor")
})