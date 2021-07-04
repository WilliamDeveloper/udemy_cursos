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

const gerarBotoes = (lista) => Extra.markup(
  Markup.inlineKeyboard(
    lista.map( (item) => Markup.callbackButton(item, `delete ${item}`)),
    {columns:3}
  )
)

bot.use(session())


bot.start(async(ctx, next) => {
  await ctx.reply(`bem vindo`)
  await ctx.reply(`escreva os item q deseja adicionar..`)
  ctx.session.lista = []
  next()
})

bot.on('text', async (ctx, next) => {
  let msg = ctx.update.message.text
  if(!ctx.session.lista) ctx.session.lista = []
  ctx.session.lista.push(msg);
  await ctx.reply(`item foi adicionado ${ctx.update.message.text}`, gerarBotoes(ctx.session.lista))
  next()
});

bot.action(/delete (.+)/gi, async (ctx, next)=>{
  ctx.session.lista = ctx.session.lista.filter(item => item !== ctx.match[1])
  await ctx.reply(`item foi deletado ${ctx.match[1]}`, gerarBotoes(ctx.session.lista))
  next()
})



bot.startPolling()