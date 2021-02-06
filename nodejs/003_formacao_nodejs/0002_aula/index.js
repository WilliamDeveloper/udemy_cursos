const express = require('express')
const app = express()

app.listen(4000,function (erro) {
    if (erro){
        console.log('um erro aconteceu')
    } else{
        console.log('servidor iniciado com sucesso')
    }
})