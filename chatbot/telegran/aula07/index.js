let mode= process.env.NODE_ENV || 'development'
let caminhoEnv= `./${mode}.env`
console.log('blau ', mode, caminhoEnv)
require('dotenv').config({ path:  caminhoEnv})

const token = `${process.env.TELEGRAN_TOKEN_BOT}`;
console.log('token ',token)


const moment = require('moment')

const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const tecladoCarne = Markup.keyboard([
  ['porco1', 'vaca1', 'macaco1'],
  ['porco2', 'vaca2', 'macaco2'],
  ['porco3', 'vaca3', 'macaco3'],
  ['sou vegetariano']
]).resize().extra()

const botoes = Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('+1','add 1'),
    Markup.callbackButton('+10','add 10'),
    Markup.callbackButton('+100','add 100'),
    Markup.callbackButton('-1','sub 1'),
    Markup.callbackButton('-10','sub 10'),
    Markup.callbackButton('-100','sub 100'),
    Markup.callbackButton('Zerar','reset'),
    Markup.callbackButton('Resultado','result'),
  ],
  {columns: 3}
))

const Telegraf = require('telegraf')
const bot = new Telegraf(token)
let contagem = 0

bot.start(async(ctx, next) => {
  await ctx.reply(`bem vindo`)
  // await ctx.reply(`voce ta com fome?`,
  //   Markup.keyboard(['Coca', 'Pepsi']).resize().oneTime().extra()
  // )
  await ctx.reply(`A contagem atual esta em ${contagem}`, botoes)
})

bot.action(/add (\d+)/gi, async (ctx, next)=>{
  contagem += parseInt(ctx.match[1])
  await ctx.reply(`A contagem atual esta em ${contagem}`, botoes)
  next()
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

bot.command('ajuda', async (ctx, next) =>{
  await ctx.reply(`/ajudar : vou mostrar as opcoes
    - asdsadas
    - asdsadas
    - asdsadas
    - asdsadas
  `)
  next()
})

bot.hears(/\/op(2|3)/i, async (ctx, next) => {
  await ctx.reply(`opcao 2 ou 3`)
  next()
})


bot.startPolling()