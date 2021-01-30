const express = require('express');
const app = express();

const porta = 3000;

app.get('/', (res,req) => {
    return res.send({message: 'Tudo ok com o método GET!'})
})

app.listen(porta);

module.exports = app;

// http://localhost:3000/