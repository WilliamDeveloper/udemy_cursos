require('dotenv').config

var app = require('./src/app');

let PORT = process.env.port || 3000

app.listen(3131,()=>{
    console.log('rodando app na porta 3131')
})