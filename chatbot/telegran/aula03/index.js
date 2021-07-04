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
  const from = ctx.update.message.from

  if(from.first_name === 'Luciane'){
    await ctx.reply('luciane 1')
  }else if(1 == 2){
    await ctx.replyWithHTML(`
      destacando com <b>HTML</b>
      <i>de varios</i> <code> formas </code> <pre>possiveis</pre>
      <a href="https://google.com.br">Google</a>
    `)
  }else if(1 == 3){
    await ctx.replyWithMarkdown(
      'destacando mensagem *Markdown* '
      +' _de varias_ `formas`  ```possiveis``` '
      +'  [google](http://www.google.com) '
    )
  }else if(1 == 4){
    await ctx.replyWithPhoto({
      source: `${__dirname}/product.jpg`
    })
  }else if(1==5){
    await ctx.replyWithPhoto(
      'https://studiosol-a.akamaihd.net/tb/letras-blog/wp-content/uploads/2019/04/d5c9a79-dia-das-maes-imagem-1024x575.jpg',
      {caption:'olha a photo'}
    )
  }else{
    await ctx.replyWithPhoto( {
      url: 'https://studiosol-a.akamaihd.net/tb/letras-blog/wp-content/uploads/2019/04/d5c9a79-dia-das-maes-imagem-1024x575.jpg',
    })

    await ctx.replyWithLocation(29.9773008,31.1303068)
    await ctx.replyWithVideo('http://files.cod3r.com.br/curso-bot/cod3r-end.m4v')
  }
  next()
})

bot.on('location',async (ctx,next) =>{
  const message = ctx.update.message
  const location = ctx.update.message.location
  console.log(' message ', message)
  console.log(' location ', location)

  await ctx.reply(`voce esta em
    lat: ${location.latitude},
    lon: ${location.longitude} !,
  `)

})

bot.on('contact',async (ctx,next) =>{
  const message = ctx.update.message
  const contact = ctx.update.message.contact
  console.log(' message ', message)
  console.log(' contact ', contact)

  await ctx.reply(`ok vou lembrar
    first_name: ${contact.first_name},
    phone_number: ${contact.phone_number},    
  `)

})

bot.on('voice',async (ctx,next) =>{
  const message = ctx.update.message
  const voice = ctx.update.message.voice
  console.log(' message ', message)
  console.log(' voice ', voice)

  await ctx.reply(`audio recebido
    ele possui ${voice.duration} segundos    
  `)
})

bot.on('photo',async (ctx,next) =>{
  const message = ctx.update.message
  const photo = ctx.update.message.photo
  console.log(' message ', message)
  console.log(' photo ', photo)

  photo.forEach( async (ph, i)=>{
    await ctx.reply(`
        photo
         ele possui ${i} tem resolucao de ${ph.width} X ${ph.height}    
    `)
  })


})

bot.on('sticker',async (ctx,next) =>{
  const message = ctx.update.message
  const sticker = ctx.update.message.sticker
  console.log(' message ', message)
  console.log(' sticker ', sticker)

  await ctx.reply(`
        sticker
         vc enviou ${sticker.emoji}    do conjunto ${sticker.set_name}
  `)


})

bot.startPolling()
