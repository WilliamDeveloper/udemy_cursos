require('dotenv').config

var app = require('./src/app');

let PORT = process.env.port || 3000

app.listen(PORT,()=>{
    console.log(`rodando app http://localhost:${PORT}`)
})