let mode= process.env.NODE_ENV || 'development'
let caminhoEnv= `./${mode}.env`
console.log('blau ', mode, caminhoEnv)
require('dotenv').config({ path:  caminhoEnv})

const token = `${process.env.TELEGRAN_TOKEN_BOT}`;
console.log('token ',token)

const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
let lista = []

const botoes =  () => {
  return Extra.markup(
    Markup.inlineKeyboard(
      lista.map( (item) => {
          return `delete ${item}`
      }),
      {columns:3}
    )
  )
}

const Telegraf = require('telegraf')
const bot = new Telegraf(token)
let contagem = 0

bot.start(async(ctx, next) => {
  await ctx.reply(`bem vindo`)
  // await ctx.reply(`voce ta com fome?`,
  //   Markup.keyboard(['Coca', 'Pepsi']).resize().oneTime().extra()
  // )
  await ctx.reply(`escreva os item q deseja adicionar..`)

})

bot.on('text', async (ctx, next) => {
  await lista.push(ctx.update.message.text)
  await ctx.reply(`item foi adicionado ${ctx.update.message.text}`, botoes())
});

bot.action(/delete (.+)/gi, async (ctx, next)=>{
 lista = lista.filter(item => item !== ctx.match[1])
  await ctx.reply(`item foi deletado ${ctx.update.message.text}`, botoes())
  next()
})



bot.startPolling()