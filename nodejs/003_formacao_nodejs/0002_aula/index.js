const express = require('express')
const app = express();

app.get('/', function (req, res) {
    res.send('luciane linda')
})


app.get('/blog', function (req, res) {
    res.send('bem vindo ao blog')
})

app.get('/canal/youtube', function (req, res) {
    res.send('bem vindo ao youtube')
})

//iniciando servidor
app.listen(4000,function (erro) {
    if (erro){
        console.log('um erro aconteceu')
    } else{
        console.log('servidor iniciado com sucesso')
    }
})