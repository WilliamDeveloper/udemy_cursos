const express = require('express');
const app = express();

const porta = 3000;

app.get('/', (req,res) => {
    let params = req.query;
    let respostaJson ={
        message: 'Tudo ok com o método GET!',
        params : params
    };
    return res.send(respostaJson)
});

app.post('/', (req,res) => {
    let params = req.query;
    return res.send({message: 'Tudo ok com o método POST!'})
});

app.listen(porta);

module.exports = app;

// http://localhost:3000/