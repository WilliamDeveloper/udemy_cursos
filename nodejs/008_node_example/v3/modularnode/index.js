
let mode= process.env.NODE_ENV || 'development'
let caminhoEnv= `./src/config/.${mode}.env`
console.log('blau ', mode, caminhoEnv)

require('dotenv').config({ path:  caminhoEnv})

var app = require('./src/app');

let HOST_PROTOCOL = process.env.HOST_PROTOCOL || 'http'
let HOST_IP = process.env.HOST_IP || 'localhost'
let PORT = process.env.PORT || 3000
global.__projectBasePathRoot = __dirname + '/';

app.listen(PORT,()=>{
    console.log(`rodando app ${HOST_PROTOCOL}://${HOST_IP}:${PORT}`)
})