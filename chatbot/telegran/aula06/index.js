let mode= process.env.NODE_ENV || 'development'
let caminhoEnv= `./${mode}.env`
console.log('blau ', mode, caminhoEnv)
require('dotenv').config({ path:  caminhoEnv})

const token = `${process.env.TELEGRAN_TOKEN_BOT}`;
console.log('token ',token)


const moment = require('moment')

const Markup = require('telegraf/markup')
const tecladoCarne = Markup.keyboard([
  ['porco1', 'vaca1', 'macaco1'],
  ['porco2', 'vaca2', 'macaco2'],
  ['porco3', 'vaca3', 'macaco3'],
  ['sou vegetariano']
]).resize().extra()

const Telegraf = require('telegraf')
const bot = new Telegraf(token)

bot.start(async(ctx, next) => {
  await ctx.reply(`bem vindo`)
  await ctx.reply(`voce ta com fome?`,
    Markup.keyboard(['Coca', 'Pepsi']).resize().oneTime().extra()
  )
})

bot.hears(['Coca','Pepsi'], async (ctx, next) => {
  await ctx.reply(`nossa eu tambem gosto de ${ctx.match}`)
  await ctx.reply(`qual sua carne predileta ? `, tecladoCarne)
  next()
})

bot.hears('vaca1', async (ctx, next) => {
  await ctx.reply(`a minha tambem ? `)
  next()
})



bot.startPolling()