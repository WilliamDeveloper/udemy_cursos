let mode= process.env.NODE_ENV || 'development'
let caminhoEnv= `./${mode}.env`
console.log('blau ', mode, caminhoEnv)
require('dotenv').config({ path:  caminhoEnv})

const token = `${process.env.TELEGRAN_TOKEN_BOT}`;
console.log('token ',token)

const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const session = require('telegraf/session')

const Telegraf = require('telegraf')
const bot = new Telegraf(token)


let lista = []

const botoes = () => Extra.markup(
  Markup.inlineKeyboard(
    lista.map( (item) => Markup.callbackButton(item, `delete ${item}`)),
    {columns:3}
  )
)


bot.start(async(ctx, next) => {
  await ctx.reply(`bem vindo`)
  // await ctx.reply(`voce ta com fome?`,
  //   Markup.keyboard(['Coca', 'Pepsi']).resize().oneTime().extra()
  // )
  await ctx.reply(`escreva os item q deseja adicionar..`)
  next()
})

bot.on('text', async (ctx, next) => {
  lista.push(ctx.update.message.text)
  await ctx.reply(`item foi adicionado ${ctx.update.message.text}`, botoes())
  next()
});

bot.action(/delete (.+)/gi, async (ctx, next)=>{
  lista = lista.filter(item => item !== ctx.match[1])
  await ctx.reply(`item foi deletado ${ctx.match[1]}`, botoes())
  next()
})



bot.startPolling()