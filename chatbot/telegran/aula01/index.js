let mode= process.env.NODE_ENV || 'development'
let caminhoEnv= `./src/config/.${mode}.env`
console.log('blau ', mode, caminhoEnv)
require('dotenv').config({ path:  caminhoEnv})

const token = process.env.TELEGRAN_TOKEN_BOT;
console.log('token ',token)

const Telegraf = require('telegraf')
const bot = new Telegraf()