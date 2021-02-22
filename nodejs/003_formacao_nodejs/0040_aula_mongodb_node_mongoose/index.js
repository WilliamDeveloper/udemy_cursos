const mongoose = require("mongoose")
const articleModel = require("./article")

mongoose.connect('mongodb://localhost:27017/aprendendoMongo',{useNewUrlParser:true, useUnifiedTopology:true})

const Article = mongoose.model("Article", articleModel)

const artigo = new Article({
    author:'william',
    body: 'conteudo',
    special:true,
    title:'monti python',
    resume:{
        content:"blablau",
        author: 'william2'
    }
})
artigo.save()

Article.find({}).then(articles =>{
    console.log('articles ', articles)
}).catch(error =>{
    console.log(error)
})