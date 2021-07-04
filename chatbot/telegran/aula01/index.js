let mode= process.env.NODE_ENV || 'development'
let caminhoEnv= `./src/config/.${mode}.env`
console.log('blau ', mode, caminhoEnv)
require('dotenv').config({ path:  caminhoEnv})

const token = `${process.env.TELEGRAN_TOKEN_BOT}`;
console.log('token ',token)

const Telegraf = require('telegraf')
const bot = new Telegraf(token)

bot.start((ctx) => {
  const from = ctx.update.message.from
  console.log(from)
  ctx.reply(`Seja bem vindo, ${from.first_name}!`)
})

bot.on('text',async (ctx,next) =>{
  await ctx.reply('luciane 1')
  next()
})

bot.on('text',async (ctx,next) =>{
  await ctx.reply('luciane 2')

})

bot.startPolling()
