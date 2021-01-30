const express = require('express');
const app = express();

const porta = 3000;

app.get('/', (req,res) => {
    return res.send({message: 'Tudo ok com o método GET!'})
});

app.get('/', (req,res) => {
    return res.send({message: 'Tudo ok com o método POST!'})
});

app.listen(porta);

module.exports = app;

// http://localhost:3000/