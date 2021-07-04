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
  console.log(' ctx.update.message ',ctx.update.message)
  console.log(' ctx.update ',ctx.update)
  console.log(' ctx ',ctx)
  console.log(from)
  if(from.id === 123){
    console.log('usuario permitido')
  }else{
    console.log('usuario nao permitido')
  }
  ctx.reply(`Seja bem vindo, ${from.first_name}!`)
})

bot.on('text',async (ctx,next) =>{
  await ctx.reply('luciane 1')

  next()
})

bot.on('location',async (ctx,next) =>{
  // console.log(' ctx ', ctx)
  const message = ctx.update.message
  const location = ctx.update.message.location
  console.log(' message ', message)
  console.log(' location ', location)
  // const {location} = ctx.update.location

  await ctx.reply(`voce esta em
    lat: ${location.latitude},
    lon: ${location.longitude} !,
  `)

})

bot.on('contact',async (ctx,next) =>{
  // console.log(' ctx ', ctx)
  const message = ctx.update.message
  const contact = ctx.update.message.contact
  console.log(' message ', message)
  console.log(' contact ', contact)
  // const {location} = ctx.update.location

  await ctx.reply(`ok vou lembrar
    first_name: ${contact.first_name},
    phone_number: ${contact.phone_number},    
  `)

})

bot.startPolling()
