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

// parametros FIXOS na rota
//http://localhost:4000/ola/Luciane/verbo
// quando tem "?" significa q o parametro nao eh obrigatorio
app.get('/ola/:nome?/:empresa?', function (req, res) {
    console.log(req.params)
    let nome = req.params.nome
    let empresa = req.params.empresa
    res.send(`ola ${nome} ${empresa}`)
})

// parametros dinamicos na rota
app.get('/query_params', function (req, res) {
    console.log(req.query)
    let canal = req.query["canal"]
    res.send(`ola ${canal} `)
})

//iniciando servidor
app.listen(4000,function (erro) {
    if (erro){
        console.log('um erro aconteceu')
    } else{
        console.log('servidor iniciado com sucesso')
    }
})