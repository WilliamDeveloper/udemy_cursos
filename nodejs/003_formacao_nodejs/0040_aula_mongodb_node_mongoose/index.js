const mongoose = require("mongoose")
const articleModel = require("./article")

mongoose.connect('mongodb://localhost:27017/aprendendoMongo',{useNewUrlParser:true, useUnifiedTopology:true})

const Article = mongoose.model("Article", articleModel)

const artigo = new Article({title:'monti python', author:'william',  body: 'conteudo'})

artigo.save().then(()=>{
    console.log('artigo salvo!')
})