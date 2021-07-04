let mode= process.env.NODE_ENV || 'development'
let caminhoEnv= `./${mode}.env`
console.log('blau ', mode, caminhoEnv)
require('dotenv').config({ path:  caminhoEnv})

const token = `${process.env.TELEGRAN_TOKEN_BOT}`;
console.log('token ',token)


const moment = require('moment')

const Telegraf = require('telegraf')
const bot = new Telegraf(token)


bot.hears('Pizza',(ctx, next) => {
  ctx.reply(`voce ta com fome?`)
})
bot.hears(['Cafe', 'Cha'],(ctx, next) => {
  ctx.reply(`bi .. bi ... (chapolin)`)
})
bot.hears([/tela/i],(ctx, next) => {
  ctx.reply(`tela com 4 turno cada`)
  next()
})
bot.hears([/campo/i],(ctx, next) => {
  ctx.reply(`campo sao 2 ponto cada`)
  next()
})
bot.hears(/(\d{2}\/\d{2}\/\d{4})/,
  (ctx, next) => {
  moment.locale('pt-BR')
  const data = moment(ctx.match[1], 'DD/MM/YYYY')
  ctx.reply(`${ctx.match[1]} cai em ${data.format('dddd')}`)
  next()
})



bot.startPolling()